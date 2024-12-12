import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerNavs, Content, Description, Header, Title } from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function HelpScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

//   function handleNavToDonationScreen() {
//     navigation.navigate('Donation')
//   }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Todos os tópicos</Title>
                    <Description>
                        Veja alguns tópicos, perguntas e respostas para as principais dúvidas dos usuários.
                    </Description>
                </Header>

                <ContainerNavs>
                    <ButtonArrow title='Conta' />
                    <ButtonArrow title='Problemas com a coleta' />
                    <ButtonArrow title='Guia sobre como usar o app' />
                    <ButtonArrow title='Acessibilidade' />
                    <ButtonArrow title='Segurança' />
                    <ButtonArrow title='Quero me tornar um Coletor' />
                    <ButtonArrow title='Como ajudar o projeto EuReciclo' />
                </ContainerNavs>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
