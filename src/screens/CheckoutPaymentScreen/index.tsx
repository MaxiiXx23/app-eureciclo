import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'
import { BtnMethod, ContainerMethods, Content, Description, Form, Header, LabelMethod, Title, TitleBtnMethod, WrapperBtnsMethods } from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { InputIcon } from 'components/atoms/InputIcon'
import { Calendar, CreditCard, IdentificationCard, } from 'phosphor-react-native'
import { Button } from 'components/atoms/Button'

type NavProps = NativeStackNavigationProp<RegisterBusinessStackParamList>

export function CheckoutPaymentScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  function handleFinishRegister() {
    console.log("Informações validadas e cadastro finalizado!")
    // navigation.navigate('RegisterPlanBusinessInfo')
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Checkout - Pagamento</Title>
                    <Description>
                        Informe os dados do cartão e forma de pagamento. 
                    </Description>
                </Header>

                <Form>
                  <InputIcon
                      icon={<CreditCard size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Número do Cartão"
                      placeholder="XXXX XXXX XXXX XXXX"
                  />

                  <InputIcon
                      icon={<Calendar size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Data de Expiração"
                      placeholder="MM/AA"
                  />

                  <InputIcon
                      icon={<CreditCard size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="CVV"
                      placeholder="123"
                  />

                  <InputIcon
                      icon={<IdentificationCard size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Apelido para o cartão (Opcional)"
                      placeholder="Digite o apelido..."
                  />

                  <ContainerMethods>
                    <LabelMethod>Método de pagamento</LabelMethod>
                    <WrapperBtnsMethods>
                      <BtnMethod>
                        <TitleBtnMethod>Débito</TitleBtnMethod>
                      </BtnMethod>
                      <BtnMethod>
                        <TitleBtnMethod>Crédito</TitleBtnMethod>
                      </BtnMethod>
                    </WrapperBtnsMethods>
                  </ContainerMethods>

                  <Button title="Finalizar Cadastro" color="primary" onPress={handleFinishRegister} />
                </Form>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
