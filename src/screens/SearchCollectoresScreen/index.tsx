import { useCallback, useState } from 'react'

import { FlatList, ToastAndroid } from 'react-native'

import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useUsers } from 'contexts/UsersContext'

import { ContainerMain } from 'components/templates/Container/styles'
import { SubHeaderSearch } from 'components/molecules/SubHeaderSearch'
import { Pagination } from 'components/molecules/Pagination'
import { InfoEmpty } from 'components/molecules/InfoEmpty'
import { Content } from './styles'
import { ItemListCollectors } from 'components/molecules/ItemListCollectors'

import { IOrdernation, IPeriodQuery, IQueryType } from 'interfaces'
import { IResponseGetListCollectorDTO } from 'dtos/user'
import { CollectoresStackParamList } from 'shared/routes/stacksParamsList'
import { AxiosError } from 'axios';

type NavProps = NativeStackNavigationProp<CollectoresStackParamList, 'CollectoresInitial'>

export function SearchCollectoresScreen() {

  const [listData, setListData] = useState<IResponseGetListCollectorDTO | undefined>()

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

  const { getSearchCollectorsToCompany, currentPage, handlePageChange, setCurrentPage } =
  useUsers()

  function handleNav(id: number) {
    navigation.navigate('InfoProfileUser', {
      id,
    })
  }

  function handleSearch(text: string) {
    setSearch(text)
    setCurrentPage(1)
  }

  useFocusEffect(
    useCallback(() => {
      getSearchCollectorsToCompany({
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
          
          return showToast("Erro não fazer login! Por Favor, tente novamente.")
        })
    }, [search, currentPage, ordernation, status, period, type])    
    )

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeaderSearch 
                title='Coletores' 
                label='Pesquise por nome, bairro, cidade, Estado...'
                description='Pesquise e encontre Coletores em sua região.'
                handleSearch={handleSearch}
            />
            
            {
              listData?.totalRows === 0 ? (
                <InfoEmpty description='Lista de coletores vázia!' />
              ) : (
                <>
                  <FlatList
                    data={listData?.collectors}
                    renderItem={({item}) => <ItemListCollectors key={item.id} data={item} handleNav={handleNav} />}
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
