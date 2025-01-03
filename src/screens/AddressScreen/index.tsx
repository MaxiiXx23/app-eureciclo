import { useEffect } from 'react'

import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'

import { MapPin } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { Content, Form, } from './styles'
import { Button } from 'components/atoms/Button'
import { SubHeader } from 'components/molecules/SubHeader'

import { addressSchema, formTypeAddressSchema } from 'schemas/collect/addressSchema'
import { InputIcon } from 'components/atoms/InputIcon'

import { IResponseFetchCEP } from 'interfaces'
import { formaterCEP } from 'utils/formatters/formaterCEP'

type NavProps = NativeStackNavigationProp<CollectStackParamList>


// Aplicar o React Hook-form nesse Componente/Tela

export function AddressScreen() {
  const navigation = useNavigation<NavProps>()
  const theme = useTheme()

  const { register, setValue, control, handleSubmit, watch} = useForm<formTypeAddressSchema>({
    resolver: zodResolver(addressSchema),
  })

  const place = watch('place')
  const number = watch('number')
  const district = watch('district')
  const city = watch('city')
  const state = watch('state')

  const onSubmit: SubmitHandler<formTypeAddressSchema> = async (data) => {

    try {
      const address = `${place}, n°${number} - ${district}`

      console.log('Requisição feita!')
      // Endereço atualizado e retorno do endereço em formato de texto para mostrar no formulário anterior
      console.log(address)
      navigation.navigate('Request')
    } catch (e) {
      // saving error
      console.log("Erro ao salvar!")
    }

  }

  async function FecthCEP(cep: string) {
    const result: IResponseFetchCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    });

    const { logradouro, bairro, localidade, uf } = result

    setValue('place', logradouro)
    setValue('district', bairro)
    setValue('city', localidade)
    setValue('state', uf)
  }

    async function handleFecth(
      e: string,
      field: ControllerRenderProps<formTypeAddressSchema>,
      ) {
        if (!e) return

        const cepReturned = formaterCEP(e)
    
        if (!cepReturned) return
    
        field.onChange(cepReturned.cepInput)

        if (cepReturned.cepFormatted.length === 8) {
            await FecthCEP(cepReturned.cepFormatted)
        }
    }


  useEffect(() => {
    register('cep')
    register('place')
    register('number')
    register('complement')
    register('district')
    register('city')
    register('state')

  }, [])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeader title='Atualizar Endereço' description='Atualize seu endereço que será usado para coletas.' />

            <Form>

                <Controller
                    control={control}
                    name="cep"
                    render={({ field }) => (
                        <InputIcon
                            icon={<MapPin size={32} color={theme.colors.primary} />}
                            color='primary'
                            label="CEP"
                            placeholder="XXXXX-XXX"
                            keyboardType='numeric'
                            maxLength={9}
                            {...field}
                            onChangeText={(text) =>
                                handleFecth(text, field)
                            }
                        />

                      )}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Rua"
                    placeholder="Rua..."
                    value={place}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Número"
                    placeholder="Digite o número..."
                    onChangeText={text => setValue('number', text)}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Complemento (Opcional)"
                    placeholder="Digite o complemento..."
                    onChangeText={text => setValue('complement', text)}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Bairro"
                    placeholder="Bairro..."
                    value={district}
                            
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Cidade"
                    placeholder="Cidade..."
                    value={city}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Estado"
                    placeholder="Estado..."
                    maxLength={2}
                    value={state}
                />

                <Button color='primary' title='Atualizar' onPress={handleSubmit(onSubmit)} />
            </Form>


          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
