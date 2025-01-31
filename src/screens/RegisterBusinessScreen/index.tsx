import { useEffect } from 'react'

import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { zodResolver } from '@hookform/resolvers/zod'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { normalizeCnpjNumber } from 'utils/masks'

import { EnvelopeSimple, IdentificationCard, User } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { Content, Description, Form, Header, Title } from './styles'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'

import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'
import { formTypeRegisterBusinessSchema, registerBusinessSchema } from 'schemas/auth/registerBusinessSchema'
import { TCreateCompany } from 'interfaces/auth'

type NavProps = NativeStackNavigationProp<RegisterBusinessStackParamList>

export function RegisterBusinessScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  const { register, setValue, control, handleSubmit} = useForm<formTypeRegisterBusinessSchema>({
    resolver: zodResolver(registerBusinessSchema),
  })

  const onSubmit: SubmitHandler<formTypeRegisterBusinessSchema> = async (data) => {

    try {

      const dataJson: TCreateCompany = {
        email: data.email,
        fantasyName: data.nameFantasy,
        docIdentification: data.cnpj
      }

      const jsonValue = JSON.stringify(dataJson);
      await AsyncStorage.setItem('@EuReciclo:registerBusiness', jsonValue);

      navigation.navigate('RegisterPlanBusinessInfo')
    } catch (e) {
      // saving error
      console.log("Erro ao salvar!")
    }

  }

  function handleChangeInputCNPJ(
    e: string,
    field: ControllerRenderProps<formTypeRegisterBusinessSchema>,
    ) {
    const value = normalizeCnpjNumber(e)
    field.onChange(value)
  }

  useEffect(() => {
    register('nameFantasy')
    register('cnpj')
    register('email')
  }, [register])
    

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Cadastro - Empresa</Title>
                    <Description>
                        Cadastre-se para divulgar sua empresa e encontrar coletores.
                    </Description>
                </Header>

                <Form>

                  <InputIcon
                      icon={<User size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Nome Fantasia"
                      placeholder="Digite seu nome da empresa"
                      onChangeText={text => setValue('nameFantasy', text)}
                  />

                  <Controller
                    control={control}
                    name="cnpj"

                    render={({ field }) => (

                      <InputIcon
                          icon={<IdentificationCard size={32} color={theme.colors.primary} />}
                          color='primary'
                          label="CNPJ"
                          placeholder="XX.XXX.XXX/XXXX-XX"
                          maxLength={18}
                          keyboardType="numeric"
                          {...field}
                          onChangeText={(text) =>
                            handleChangeInputCNPJ(text, field)
                          }
                      />
                    )}
                  />

                  <InputIcon
                      icon={<EnvelopeSimple size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="E-mail"
                      placeholder="Digite seu e-mail"
                      onChangeText={text => setValue('email', text)}
                      keyboardType='email-address'
                  />

                  <Button title="Próximo" color="primary" onPress={handleSubmit(onSubmit)} />
                </Form>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
