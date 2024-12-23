import { useEffect } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'

import { normalizeCnpjOrCpfNumber, normalizeDate } from 'utils/masks'

import { formTypeRegisterClientSchema, registerClientSchema } from 'schemas/auth/registerClientSchema'

import { CalendarBlank, EnvelopeSimple, IdentificationCard, Lock, User } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { Content, Description, Form, Header, Title } from './styles'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'
import { InputPassword } from 'components/atoms/InputPassword'



export function RegisterClientScreen() {
  const theme = useTheme()

  const { register, setValue, control, handleSubmit} = useForm<formTypeRegisterClientSchema>({
    resolver: zodResolver(registerClientSchema),
  })

  const onSubmit: SubmitHandler<formTypeRegisterClientSchema> = async (data) => {
    if (data.password !== data.confirmPassword) {
      console.log("Senhas não correspondentes!")
    }

    console.log("Cadastro efetuado com sucesso!")
  }

  function handleChangeInputCPF(
    e: string,
    field: ControllerRenderProps<formTypeRegisterClientSchema>,
  ) {
    const value = normalizeCnpjOrCpfNumber(e)
    field.onChange(value)
  }

  function handleChangeInputBirth(
    e: string,
    field: ControllerRenderProps<formTypeRegisterClientSchema>,
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
                    <Title>Cadastro - Cliente</Title>
                    <Description>
                        Cadastre-se para poder solicitar o recolhimento dos seus recicláveis.
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

                  <Button title="Registrar" color="primary" onPress={handleSubmit(onSubmit)} />
                </Form>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
