import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'
import { Content, Description, Form, Header, Title } from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { InputIcon } from 'components/atoms/InputIcon'
import { EnvelopeSimple, IdentificationCard, Lock, User } from 'phosphor-react-native'
import { Button } from 'components/atoms/Button'

type NavProps = NativeStackNavigationProp<RegisterBusinessStackParamList>

export function RegisterBusinessScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  function handleNavToInfoPlanScreen() {
    navigation.navigate('RegisterPlanBusinessInfo')
  }

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
                  />

                  <InputIcon
                      icon={<IdentificationCard size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="CNPJ"
                      placeholder="XX.XXX.XXX/XXXX-XX"
                  />

                  <InputIcon
                      icon={<EnvelopeSimple size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="E-mail"
                      placeholder="Digite seu e-mail"
                  />


                  <InputIcon
                      icon={<Lock size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Senha"
                      placeholder="Digite sua senha"
                  />

                  <InputIcon
                      icon={<Lock size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Confirme a senha"
                      placeholder="Confirme sua senha"
                  />

                  <Button title="Próximo" color="primary" onPress={handleNavToInfoPlanScreen} />
                </Form>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
