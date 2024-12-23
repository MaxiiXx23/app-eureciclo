import { useEffect } from 'react'

import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { normalizeCnpjOrCpfNumber, normalizeDate } from 'utils/masks'

import { CalendarBlank, EnvelopeSimple, IdentificationCard, Lock, User } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { Content, Description, Form, Header, Title } from './styles'
import { InputIcon } from 'components/atoms/InputIcon'
import { InputPassword } from 'components/atoms/InputPassword'
import { Button } from 'components/atoms/Button'

import { RegisterCollectorStackParamList } from 'shared/routes/stacksParamsList'
import { formTypeRegisterCollectorSchema, registerCollectorSchema } from 'schemas/auth/registerCollectorSchema'

type NavProps = NativeStackNavigationProp<RegisterCollectorStackParamList>

export function RegisterCollectorScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

    const { register, setValue, control, handleSubmit} = useForm<formTypeRegisterCollectorSchema>({
      resolver: zodResolver(registerCollectorSchema),
    })
  
    const onSubmit: SubmitHandler<formTypeRegisterCollectorSchema> = async (data) => {
      if (data.password !== data.confirmPassword) {
        console.log("Senhas não correspondentes!")
      }



      try {
        const jsonValue = JSON.stringify(data);
        console.log(jsonValue)
        await AsyncStorage.setItem('@EuReciclo:registerCollector', jsonValue);

        console.log("Cadastro efetuado com sucesso!")
        navigation.navigate('RegisterCollectiorInfo')
      } catch (e) {
        // saving error
        console.log("Erro ao salvar!")
      }

    }
  
    function handleChangeInputCPF(
      e: string,
      field: ControllerRenderProps<formTypeRegisterCollectorSchema>,
    ) {
      const value = normalizeCnpjOrCpfNumber(e)
      field.onChange(value)
    }
  
    function handleChangeInputBirth(
      e: string,
      field: ControllerRenderProps<formTypeRegisterCollectorSchema>,
    ) {
      const value = normalizeDate(e)
      field.onChange(value)
    }
  
    useEffect(() => {
      register('fullname')
      register('cpf')
      register('dateBirth')
      register('password')
      register('email')
      register('confirmPassword')
    }, [register])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Cadastro - Coletor</Title>
                    <Description>
                        Cadastre-se para coletar materiais recicláveis de forma simples e rápida.
                    </Description>
                </Header>

                <Form>

                  <InputIcon
                      icon={<User size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Nome completo"
                      placeholder="Digite seu nome completo"
                      onChangeText={text => setValue('fullname', text)}
                  />

                  <Controller
                    control={control}
                    name="cpf"

                    render={({ field }) => (
                      <InputIcon
                        icon={<IdentificationCard size={32} color={theme.colors.primary} />}
                        color='primary'
                        label="CPF"
                        placeholder="XXX.XXX.XXX.XX"
                        maxLength={14}
                        keyboardType="numeric"
                        {...field}
                        onChangeText={(text) =>
                          handleChangeInputCPF(text, field)
                        }
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="dateBirth"

                    render={({ field }) => (
                      <InputIcon
                        icon={<CalendarBlank size={32} color={theme.colors.primary} />}
                        color='primary'
                        label="Data de Nascimento"
                        placeholder="DD/MM/YYYY"
                        maxLength={10}
                        keyboardType="numeric"
                        {...field}
                        onChangeText={(text) =>
                          handleChangeInputBirth(text, field)
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


                  <InputPassword
                      color='primary'
                      label="Senha"
                      placeholder="Digite sua senha"
                      onChangeText={text => setValue('password', text)}
                  />

                  <InputPassword
                      color='primary'
                      label="Confirme a senha"
                      placeholder="Confirme sua senha"
                      onChangeText={text => setValue('confirmPassword', text)}
                  />

                  <Button title="Próximo" color="primary" onPress={handleSubmit(onSubmit)} />
                </Form>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
