import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { dataNews } from 'data'

import { ContainerMain } from 'components/templates/Container/styles'
import { HomeStackParamList } from 'shared/routes/stacksParamsList'
import { Content } from './styles'
import { ListCardsHorizontal } from 'components/organisms/ListCardsHorizontal'
import { Ads } from 'components/organisms/Ads'
import { Header } from 'components/organisms/Header'

type LoginScreenProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>

export function HomeScreen() {
  const theme = useTheme()
  const navigation = useNavigation<LoginScreenProp>()

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
            <Ads />
            <ListCardsHorizontal title='Notícias' data={dataNews} />
            <ListCardsHorizontal title='Tópicos da semana' data={dataNews} />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
