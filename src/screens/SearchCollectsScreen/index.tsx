import { useCallback, useState } from 'react'

import { FlatList, ToastAndroid } from 'react-native'

import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useCollects } from 'contexts/CollectsContext'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerMain } from 'components/templates/Container/styles'
import { SubHeaderSearch } from 'components/molecules/SubHeaderSearch'
import { ItemActivity } from 'components/molecules/ItemActivity'
import { Pagination } from 'components/molecules/Pagination'
import { InfoEmpty } from 'components/molecules/InfoEmpty'
import { Content } from './styles'

import { IOrdernation, IPeriodQuery, IQueryType } from 'interfaces'
import { IResponseGetListCollectsByUserDTO } from 'dtos/collects'
import { AxiosError } from 'axios';

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'Initial'>

export function SearchCollectsScreen() {

  const [listData, setListData] = useState<IResponseGetListCollectsByUserDTO | undefined>()

  const [ordernation, setOrdernation] =
  useState<IOrdernation['ordernation']>('asc')

  const [status, setStatus] = useState<number>(4)
  const [search, setSearch] = useState<string>('')
  const [period, setPeriod] = useState<IPeriodQuery>({})
  const type: IQueryType['type'] = 'all'
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
  

  const navigation = useNavigation<NavProps>()

  const { getCollectsToCollector, currentPage, handlePageChange, setCurrentPage } =
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
        getCollectsToCollector({
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
        .catch((error) => {
          if (error instanceof AxiosError) {
            return showToast(error.response?.data.messsage)
          }
          
          return showToast("Erro ao buscar solicitações de coleta! Por Favor, tente novamente.")
        })
      }, [search, currentPage, ordernation, status, period, type])    
    )

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeaderSearch 
                title='Solicitações de Coletas' 
                description='Pesquise e encontre coletas na sua região'
                handleSearch={handleSearch}
            />
            
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
