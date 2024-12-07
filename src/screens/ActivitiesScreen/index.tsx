import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ActivitiesStackParamList } from 'shared/routes/stacksParamsList'
import { Content } from './styles'
import { Header } from 'components/organisms/Header'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SubHeader } from 'components/molecules/SubHeader'
import { ItemActivity } from 'components/molecules/ItemActivity'
import { FlatList } from 'react-native'
import { Pagination } from 'components/molecules/Pagination'

type NavProps = NativeStackNavigationProp<ActivitiesStackParamList, 'ActivitiesInitial'>

const DATA = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'Second Item',
    },
    {
      id: 3,
      title: 'Third Item',
    },
    {
        id: 4,
        title: 'First Item',
      },
      {
        id: 5,
        title: 'Second Item',
      },
      {
        id: 6,
        title: 'Third Item',
      },
      {
        id: 7,
        title: 'First Item',
      },
      {
        id: 8,
        title: 'Second Item',
      },
      {
        id: 9,
        title: 'Third Item',
      },
      {
        id: 10,
        title: 'First Item',
      },
  ];

export function ActivitiesScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
            <SubHeader title='Atividades' description='Histórico de atividades.' />
            
            <FlatList
                data={DATA}
                renderItem={({item}) => <ItemActivity key={item.id} />}
                keyExtractor={item => item.id.toString()}
            />


            <Pagination />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
