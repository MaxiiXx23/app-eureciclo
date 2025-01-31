import { useContext, useEffect, useState } from 'react'

import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'

import { UsersAPIs } from 'apis/users'
import { AuthContext } from 'contexts/AuthContext'
import { formaterCEP } from 'utils/formatters/formaterCEP'

import { MapPin } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { Content, Form, } from './styles'
import { Button } from 'components/atoms/Button'
import { SubHeader } from 'components/molecules/SubHeader'

import { addressSchema, formTypeAddressSchema } from 'schemas/collect/addressSchema'
import { InputIcon } from 'components/atoms/InputIcon'

import { IResponseFetchCEP } from 'interfaces'
import { CompaniesAPIs } from 'apis/companies'

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function AddressScreen() {
  const [idAddress, setIdAddress] = useState<number | undefined>()

  const navigation = useNavigation<NavProps>()
  const theme = useTheme()
  const { params } = useRoute()
  const { userAuth } = useContext(AuthContext)


  const {register, setValue, control, handleSubmit, watch} = useForm<formTypeAddressSchema>({
    resolver: zodResolver(addressSchema),
  })

  const place = watch('place')
  const number = watch('number')
  const complement = watch('complement')
  const district = watch('district')
  const city = watch('city')
  const state = watch('state')

  const onSubmit: SubmitHandler<formTypeAddressSchema> = async (data) => {

    try {

      if(params!.type && params!.type === 1) {
        if(idAddress) {
          await UsersAPIs.updateAddress({
            id: idAddress,
            cep: data.cep,
            street: data.place,
            number: data.number,
            complement: data.complement ? data.complement : '',
            district: data.district,
            city: data.city,
            state: data.state,
            country: 'BR'
          })
        } else {
          await UsersAPIs.createAddress({
            userId: userAuth.id,
            cep: data.cep,
            street: data.place,
            number: data.number,
            complement: data.complement ? data.complement : '',
            district: data.district,
            city: data.city,
            state: data.state,
            country: 'BR'
          })
        }
      } else {
        if(idAddress) {
          await CompaniesAPIs.updateAddress({
            id: idAddress,
            cep: data.cep,
            street: data.place,
            number: data.number,
            complement: data.complement ? data.complement : '',
            district: data.district,
            city: data.city,
            state: data.state,
            country: 'BR'
          })
        } else {
          await CompaniesAPIs.createAddress({
            companyId: params!.id,
            cep: data.cep,
            street: data.place,
            number: data.number,
            complement: data.complement ? data.complement : '',
            district: data.district,
            city: data.city,
            state: data.state,
            country: 'BR'
          })
        }
      }
      


      navigation.goBack()

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

    async function getAddressByUserId() {
      try {
        const { data } = await UsersAPIs.getAddressByUserId(userAuth.id)

        if(data.address === null) return
        setIdAddress(data.address.id)
        setValue('cep', data.address.cep)
        setValue('place', data.address.street)
        setValue('number', data.address.number)
        setValue('complement', data.address.complement ? data.address.complement : '')
        setValue('district', data.address.district)
        setValue('city', data.address.city)
        setValue('state', data.address.state)

      } catch (error) {
        console.log(error)
      }
    }

    async function getAddressByCompanyId(id: number) {
      try {
        const { data } = await CompaniesAPIs.getAddressByCompanyId(id)

        if(data.address === null) return
        setIdAddress(data.address.id)
        setValue('cep', data.address.cep)
        setValue('place', data.address.street)
        setValue('number', data.address.number)
        setValue('complement', data.address.complement ? data.address.complement : '')
        setValue('district', data.address.district)
        setValue('city', data.address.city)
        setValue('state', data.address.state)

      } catch (error) {
        console.log(error)
      }
    }


  useEffect(() => {

    if(params!.type && params!.type === 1) {
      getAddressByUserId()
    } else {
      getAddressByCompanyId(params!.id)
    }

    register('cep')
    register('place')
    register('number')
    register('complement')
    register('district')
    register('city')
    register('state')

  }, [register])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeader title='Atualizar Endereço' description='Atualize seu endereço que será usado para lhe encontrar.' />

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
                    defaultValue={place}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Número"
                    defaultValue={number}
                    placeholder="Digite o número..."
                    onChangeText={text => setValue('number', text)}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Complemento (Opcional)"
                    placeholder="Digite o complemento..."
                    defaultValue={complement}
                    onChangeText={text => setValue('complement', text)}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Bairro"
                    placeholder="Bairro..."
                    defaultValue={district}
                            
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Cidade"
                    placeholder="Cidade..."
                    defaultValue={city}
                />

                <InputIcon
                    icon={<MapPin size={32} color={theme.colors.primary} />}
                    color='primary'
                    label="Estado"
                    placeholder="Estado..."
                    maxLength={2}
                    defaultValue={state}
                />

            </Form>

            <Button color='primary' title='Atualizar' onPress={handleSubmit(onSubmit)} />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
