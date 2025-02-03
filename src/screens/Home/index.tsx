import { SafeAreaProvider } from 'react-native-safe-area-context'

import { dataNews } from 'data'

import { ContainerMain } from 'components/templates/Container/styles'
import { Content } from './styles'
import { ListCardsHorizontal } from 'components/organisms/ListCardsHorizontal'
import { Ads } from 'components/organisms/Ads'
import { Header } from 'components/organisms/Header'

export function HomeScreen() {

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
