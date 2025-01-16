import { useContext } from 'react'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'

import { ContainerMain } from 'components/templates/Container/styles'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerCards, Content } from './styles'
import { Header } from 'components/organisms/Header'
import { SubHeader } from 'components/molecules/SubHeader'
import { CardCollect } from 'components/molecules/CardCollect'

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'CollectInitial'>

export function CollectScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()
  const { userAuth } = useContext(AuthContext)

  function handleNavToRequest() {
    navigation.navigate('Request')
  }

  function handleNavToVerify() {
    navigation.navigate('Verify', {})
  }

  function handleNavToSearch() {
    navigation.navigate('SearchCollects')
  }

  function handleNavToSearchInProcessByColletor() {
    navigation.navigate('VerifyCollectsInProcess', {
      isInProcess: true
    })
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
            <SubHeader title='Coleta' description='Deseja solicitar uma coleta ou quer verificar o andamento da sua solicitação, aqui é o lugar.' />

            <ContainerCards>
              {
                userAuth.typeUserId === 1 && (
                  <>
                    <CardCollect
                      onPress={handleNavToRequest}
                      title='Solicitar Coleta' 
                      description='Solicite a coleta de seus materiais recicláveis.' 
                    />

                  <CardCollect 
                      onPress={handleNavToVerify}
                      title='Verificar Coleta' 
                      description='Veja as informações da sua coleta que está em andamento.' 
                    />

                  </>
                )
              }

              {
                userAuth.typeUserId === 2 && (
                  <>
                    <CardCollect
                      onPress={handleNavToSearch}
                      title='Solicitações' 
                      description='Pesquise e encontre solicitações na sua região.' 
                    />

                    <CardCollect 
                      onPress={handleNavToSearchInProcessByColletor}
                      title='Verificar Coletas' 
                      description='Veja a sua lista de coletas que estão em andamento.' 
                    />
                  </>
                )
              }
            </ContainerCards>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
