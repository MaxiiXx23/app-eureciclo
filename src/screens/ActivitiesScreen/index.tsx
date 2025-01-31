import { useCallback, useContext, useState } from 'react'

import { FlatList } from 'react-native'

import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useCollects } from 'contexts/CollectsContext'
import { AuthContext } from 'contexts/AuthContext'

import { ActivitiesStackParamList, CollectStackParamList } from 'shared/routes/stacksParamsList'
import { Content } from './styles'
import { Header } from 'components/organisms/Header'
import { ContainerMain } from 'components/templates/Container/styles'
import { SubHeader } from 'components/molecules/SubHeader'
import { ItemActivity } from 'components/molecules/ItemActivity'
import { Pagination } from 'components/molecules/Pagination'
import { InfoEmpty } from 'components/molecules/InfoEmpty'

import { IOrdernation, IPeriodQuery, IQueryType } from 'interfaces'
import { IResponseGetListCollectsByUserDTO } from 'dtos/collects'
import { SubHeaderSearch } from 'components/molecules/SubHeaderSearch'

type NavProps = NativeStackNavigationProp<ActivitiesStackParamList, 'Initial'>

export function ActivitiesScreen() {
  
  const { params } = useRoute()
  const navigation = useNavigation<NavProps>()
  const { userAuth } = useContext(AuthContext)

  const [listData, setListData] = useState<IResponseGetListCollectsByUserDTO | undefined>()
  const [ordernation, setOrdernation] =
  useState<IOrdernation['ordernation']>('asc')
  const [status, setStatus] = useState<number>(4)
  const [search, setSearch] = useState<string>('')
  const [period, setPeriod] = useState<IPeriodQuery>({})
  const type: IQueryType['type'] = 'all'
  const { isInProcess } = params as CollectStackParamList['VerifyCollectsInProcess']

  const { getCollectsPaginated, getCollectsPaginatedByCollector, currentPage, handlePageChange, setCurrentPage } =
  useCollects()

  function handleNav(id: number) {
    navigation.navigate('Verify', {
      id,
    })
  }

  function handleSearch(text: string) {
    setSearch(text)
    setCurrentPage(1)
  }

  useFocusEffect(
    useCallback(() => {
      if(userAuth.typeUserId === 1) {
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
      } else {
  
        getCollectsPaginatedByCollector({
          id: userAuth.id,
          search,
          page: currentPage,
          perPage: 10,
          status: isInProcess ? '3' : '1,3',
          ordernation,
          period,
          type: 'all', 
        }).then((data) =>  {
          setListData(data)
           
        })
        .catch()
      }
    }, [search, currentPage, ordernation, status, period, type])    
  )

  return (
    <SafeAreaProvider>
      <ContainerMain>
          { !isInProcess && <Header />}
          <Content>

            {
              isInProcess ? (
                <SubHeaderSearch 
                    title='Solicitações em andamento' 
                    description='Pesquise as suas coletas que estão em andamento.'
                    handleSearch={handleSearch}
                />
              ) : (
                <SubHeader title='Atividades' description='Histórico de atividades.' />
              )
            }

            
            
            {
              listData?.totalRows === 0 ? (
                <InfoEmpty description='Lista de coletas vázia!' />
              ) : (
                <>
                  <FlatList
                    data={listData?.collects}
                    renderItem={({item}) => <ItemActivity key={item.id} data={item} handleNav={handleNav} />}
                    keyExtractor={item => item.id.toString()}
                  />
 
                  <Pagination
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    totalPage={listData?.totalRows}
                  />
                </>
              )
            }

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
