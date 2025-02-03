import { useEffect, useState } from 'react'

import { FlatList, ToastAndroid } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useCollects } from 'contexts/CollectsContext'

import { ContainerMain } from 'components/templates/Container/styles'
import { SubHeaderSearch } from 'components/molecules/SubHeaderSearch'
import { Pagination } from 'components/molecules/Pagination'
import { InfoEmpty } from 'components/molecules/InfoEmpty'
import { ItemListCompany } from 'components/molecules/ItemListCompany'
import { Content } from './styles'

import { AxiosError } from 'axios'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { IOrdernation, IPeriodQuery, IQueryType } from 'interfaces'
import { TResponseListCompaniesDTO } from 'dtos/companies'

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'Initial'>

export function SearchCompanies() {

  const [listData, setListData] = useState<TResponseListCompaniesDTO | undefined>()
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
  const [ordernation, setOrdernation] =
  useState<IOrdernation['ordernation']>('asc')

  const [status, setStatus] = useState<number>(4)
  const [search, setSearch] = useState<string>('')
  const [period, setPeriod] = useState<IPeriodQuery>({})
  const type: IQueryType['type'] = 'all'

  const navigation = useNavigation<NavProps>()

  const { getSearchCompaniesToCollector, currentPage, handlePageChange, setCurrentPage } =
  useCollects()

  function handleNav(id: number) {
    navigation.navigate('ProfileInfoCompany', {
      id,
    })
  }

  function handleSearch(text: string) {
    setSearch(text)
    setCurrentPage(1)
  }

  useEffect(() => {

    getSearchCompaniesToCollector({
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

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeaderSearch 
                title='Empresas de reciclagem' 
                description='Pesquise e encontre empresas em sua região'
                handleSearch={handleSearch}
            />
            
            {
              listData?.totalRows === 0 ? (
                <InfoEmpty description='Lista de coletas vázia!' />
              ) : (
                <>
                  <FlatList
                    data={listData?.companies}
                    renderItem={({item}) => <ItemListCompany key={item.id} data={item} handleNav={handleNav} />}
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
