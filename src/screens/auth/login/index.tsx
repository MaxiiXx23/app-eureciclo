import { Button } from 'components/atoms/Button'
import { Container } from 'components/templates/Container/styles'
import { ContainerForm, ContainerInputs, ContainerOptions } from './styles'

import { InputIcon } from 'components/atoms/InputIcon'

import { EnvelopeSimple } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { InputPassword } from 'components/atoms/InputPassword'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from 'shared/routes/stacksParamsList'
import { TextShape } from 'components/atoms/Text'
import { IconEuReciclo } from 'components/molecules/IconEuReciclo'

type LoginScreenProp = NativeStackNavigationProp<
  AuthStackParamList,
  'ChooseRegisterScreen'
>

export function LoginScreen() {
  const theme = useTheme()
  const navigation = useNavigation<LoginScreenProp>()

  function handleNavToSignIn() {
    navigation.navigate('ChooseRegisterScreen')
  }

  return (
    <Container>
      <ContainerForm>
        <IconEuReciclo />
        <ContainerInputs>
          <InputIcon
            icon={<EnvelopeSimple size={32} color={theme.colors.primary} />}
            label="E-mail"
            placeholder="E-mail"
          />
          <InputPassword label="Senha" placeholder="Senha" />
          <Button title="Entrar" color="button" onPress={handleNavToSignIn} />
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
