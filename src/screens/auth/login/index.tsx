import { useState, useEffect, useContext } from 'react'

import { ToastAndroid } from 'react-native'

import { EnvelopeSimple } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthContext } from 'contexts/AuthContext'

import { Button } from 'components/atoms/Button'
import { Container } from 'components/templates/Container/styles'
import { ContainerForm, ContainerInputs, ContainerOptions } from './styles'
import { InputIcon } from 'components/atoms/InputIcon'
import { InputPassword } from 'components/atoms/InputPassword'
import { AuthStackParamList } from 'shared/routes/stacksParamsList'
import { TextShape } from 'components/atoms/Text'
import { IconEuReciclo } from 'components/molecules/IconEuReciclo'

import { AxiosError } from 'axios'

type LoginScreenProp = NativeStackNavigationProp<
  AuthStackParamList,
  'ChooseRegisterScreen'
>

export function LoginScreen() {

  const [emailInput, setEmailInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const theme = useTheme()
  const navigation = useNavigation<LoginScreenProp>()
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }

  const { signIn } = useContext(AuthContext)

  function handleNavToSignIn () {
    navigation.navigate('ChooseRegisterScreen')
  }

  async function handleSubmitAuth() {

    try {
      if(!emailInput || !passwordInput!) {
        return showToast('Login não preenchido!')
       
      }
  
      await signIn({
        email: emailInput,
        password: passwordInput
      })
  
      // Fazer a requisitação Auth e navegar para dentro do APP
  
      setEmailInput('')
      setPasswordInput('')
    } catch(error) {
      if(error instanceof AxiosError) {
        return showToast(error.response?.data.message)
      }

      return showToast('Erro ao fazer Login! Por favor, tente novamante.')
    }
  }

  useEffect(() => {
    setEmailInput('')
    setPasswordInput('')
  }, [])

  return (
    <Container>
      <ContainerForm>
        <IconEuReciclo />
        <ContainerInputs>
          <InputIcon
            icon={<EnvelopeSimple size={32} color={theme.colors.primary} />}
            label="E-mail"
            placeholder="E-mail"
            keyboardType='email-address'
            value={emailInput}
            onChangeText={(text) => setEmailInput(text)}
          />
          <InputPassword 
            label="Senha" 
            placeholder="Senha"
            value={passwordInput}
            onChangeText={(text) => setPasswordInput(text)}
          />
          <Button title="Entrar" color="button" onPress={handleSubmitAuth} />
        </ContainerInputs>
        <ContainerOptions>
          <TextShape.WrapperTextInline>
            <TextShape.Text text="Não possui uma conta?" />
            <TextShape.TextLink
              text="Cadastre-se."
              onPress={handleNavToSignIn}
            />
          </TextShape.WrapperTextInline>
        </ContainerOptions>
      </ContainerForm>
    </Container>
  )
}
