import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RegisterCollectorStackParamList } from 'shared/routes/stacksParamsList'
import { Content, Description, Form, Header, Title } from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { InputIcon } from 'components/atoms/InputIcon'
import { CalendarBlank, EnvelopeSimple, IdentificationCard, Lock, User } from 'phosphor-react-native'
import { Button } from 'components/atoms/Button'

type NavProps = NativeStackNavigationProp<RegisterCollectorStackParamList>

export function RegisterCollectorScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  function handleNavToInfoPlanScreen() {
    navigation.navigate('RegisterCollectiorInfo')
  }

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
                  />

                  <InputIcon
                      icon={<IdentificationCard size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="CPF"
                      placeholder="XXX.XXX.XXX.XX"
                  />

                  <InputIcon
                      icon={<CalendarBlank size={32} color={theme.colors.primary} />}
                      color='primary'
                      label="Data de Nascimento"
                      placeholder="__/__/___"
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
