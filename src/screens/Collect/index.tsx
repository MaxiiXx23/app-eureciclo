import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerCards, Content } from './styles'
import { Header } from 'components/organisms/Header'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SubHeader } from 'components/molecules/SubHeader'
import { CardCollect } from 'components/molecules/CardCollect'

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'CollectInitial'>

export function CollectScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  function handleNavToRequest() {
    navigation.navigate('Request')
  }

  function handleNavToVerify() {
    navigation.navigate('Verify')
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
            <SubHeader title='Coleta' description='Deseja solicitar uma coleta ou quer verificar o andamento da sua solicitação, aqui é o lugar.' />

            <ContainerCards>
              <CardCollect
                onPress={handleNavToRequest}
                title='Solicitar Coleta' 
                description='Solicite a coleta de seus materiais recicláveis.' 
              />
              <CardCollect 
                onPress={handleNavToVerify}
                title='Verificar Coleta' 
                description='Verifique o status da sua solicitação de coleta.' 
              />
            </ContainerCards>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
