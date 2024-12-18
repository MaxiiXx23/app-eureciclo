import { useNavigation } from '@react-navigation/native'

import { Button } from 'components/atoms/Button'
import { Container } from 'components/templates/Container/styles'
import {
  ContainerForm,
  Title,
  ContainerIcon,
  ContainerBtns,
  WrapperTextRegister,
  TextRegister,
  TextSignUp,
} from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from 'shared/routes/stacksParamsList'
import { IconEuReciclo } from 'components/molecules/IconEuReciclo'

type ChooseRegisterScreenProp = NativeStackNavigationProp<
  AuthStackParamList,
  'LoginScreen'
>

export function ChooseRegisterScreen() {
  const navigation = useNavigation<ChooseRegisterScreenProp>()

  function handleNavToSignIn() {
    navigation.navigate('LoginScreen')
  }

  function handleNavToRegisterClient() {
    navigation.navigate('RegisterClientScreen')
  }

  function handleNavToRegisterCollector() {
    navigation.navigate('RegisterCollector')
  }

  function handleNavToRegisterBusiness() {
    navigation.navigate('RegisterBusinessRouter')
  }

  return (
    <Container>
      <ContainerForm>
        <ContainerIcon>
          <IconEuReciclo />
          <Title>Como deseja se cadastrar?</Title>
        </ContainerIcon>
        <ContainerBtns>
          <Button color="button" title="Cliente" onPress={handleNavToRegisterClient} />
          <Button color="button" title="Coletor" onPress={handleNavToRegisterCollector} />
          <Button color="button" title="Empresa" onPress={handleNavToRegisterBusiness} />
        </ContainerBtns>
        <WrapperTextRegister>
          <TextRegister>Já possui uma conta?</TextRegister>
          <TextSignUp onPress={handleNavToSignIn}>Entre.</TextSignUp>
        </WrapperTextRegister>
      </ContainerForm>
    </Container>
  )
}
