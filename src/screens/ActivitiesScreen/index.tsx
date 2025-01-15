import { useEffect, useState } from 'react'

import { FlatList } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useCollects } from 'contexts/CollectsContext'


import { ActivitiesStackParamList } from 'shared/routes/stacksParamsList'
import { Content } from './styles'
import { Header } from 'components/organisms/Header'
import { ContainerMain } from 'components/templates/Container/styles'
import { SubHeader } from 'components/molecules/SubHeader'
import { ItemActivity } from 'components/molecules/ItemActivity'
import { Pagination } from 'components/molecules/Pagination'

import { IOrdernation, IPeriodQuery, IQueryType } from 'interfaces'
import { IResponseGetListCollectsByUserDTO } from 'dtos/collects'

type NavProps = NativeStackNavigationProp<ActivitiesStackParamList, 'ActivitiesInitial'>

export function ActivitiesScreen() {

  const [listData, setListData] = useState<IResponseGetListCollectsByUserDTO>()

  const [ordernation, setOrdernation] =
  useState<IOrdernation['ordernation']>('asc')

  const [status, setStatus] = useState<number>(4)
  const [search, setSearch] = useState<string>('')
  const [period, setPeriod] = useState<IPeriodQuery>({})
  const type: IQueryType['type'] = 'all'

  const navigation = useNavigation<NavProps>()

  const { getCollectsPaginated, currentPage, handlePageChange, setCurrentPage } =
  useCollects()

  function handleNav(id: number) {
    navigation.navigate('Verify', {
      id,
    })
  }

  useEffect(() => {

    getCollectsPaginated({
      search,
      page: currentPage,
      perPage: 10,
      status,
      ordernation,
      period,
      type: 'all', 
    }).then((data) =>  {
      setListData(data)
       
    })
    .catch()

  }, [search, currentPage, ordernation, status, period, type])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
            <SubHeader title='Atividades' description='Histórico de atividades.' />
            
            <FlatList
                data={listData?.collects}
                renderItem={({item}) => <ItemActivity key={item.id} data={item} handleNav={handleNav} />}
                keyExtractor={item => item.id.toString()}
            />


            {
              listData?.totalRows && (
                <Pagination
                  handlePageChange={handlePageChange}
                  currentPage={currentPage}
                  totalPage={listData.totalRows}
                />
              )
            }
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
