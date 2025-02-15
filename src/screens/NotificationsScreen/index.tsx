import { useCallback, useState } from 'react'

import { FlatList, ToastAndroid } from 'react-native'

import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NotificationsAPIs } from 'apis/notifications';

import { ContainerMain } from 'components/templates/Container/styles'
import { Pagination } from 'components/molecules/Pagination'
import { InfoEmpty } from 'components/molecules/InfoEmpty'
import { Content } from './styles'
import { ItemListCollectors } from 'components/molecules/ItemListCollectors'
import { SubHeader } from 'components/molecules/SubHeader';

import { IOrdernation, IPeriodQuery, IQueryType, IRequestPagination } from 'interfaces'
import { CollectoresStackParamList } from 'shared/routes/stacksParamsList'
import { AxiosError } from 'axios';
import { IResponseGetListNotificationsDTO } from 'dtos/notifications';
import { ItemListNotification } from 'components/molecules/ItemListNotification';


type NavProps = NativeStackNavigationProp<CollectoresStackParamList, 'CollectoresInitial'>

export function NotificationsScreen() {

  const [listData, setListData] = useState<IResponseGetListNotificationsDTO | undefined>()

  const [status, setStatus] = useState<number>(4)
  const [search, setSearch] = useState<string>('')
  const [period, setPeriod] = useState<IPeriodQuery>({})
  const [ordernation, setOrdernation] =
  useState<IOrdernation['ordernation']>('asc')

  const [currentPage, setCurrentPage] = useState<number>(1)
  const type: IQueryType['type'] = 'all'
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }

  const navigation = useNavigation<NavProps>()

  const handlePageChange = (page: number, totalPage: number) => {
    if (page < 1 || page > totalPage) return
    setCurrentPage(page)
  }

  function handleNav(id: number) {
    navigation.navigate('SendReview', {
      id,
      type: 1
    })
  }

  async function getNotificationsByUser({
      page,
      perPage,
      search,
      ordernation,
      status
    }: IRequestPagination) {
      const response = await NotificationsAPIs.getNotificationsByUser({
        page,
        perPage,
        search: '',
        ordernation: 'desc',
        status: 1
      })
      
      setCurrentPage(response.data.currentPage)
      return response.data
    }
  

  useFocusEffect(
    useCallback(() => {
        getNotificationsByUser({
            search,
            status, 
            page: currentPage,
            perPage: 10,
            ordernation,
            type: 'all',
            }).then((data) =>  {
                setListData(data)   
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    return showToast(error.response?.data.messsage)
                }
            
                return showToast("Erro ao buscar coletores! Por Favor, tente novamente.")
            })
    }, [search, currentPage, ordernation, status, period, type])    
    )

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeader
                title='Notificações' 
                description='Veja as suas notificações.'
            />
            
            {
              listData?.totalRows === 0 ? (
                <InfoEmpty description='Você não possui nenhuma notificação' />
              ) : (
                <>
                  <FlatList
                    data={listData?.notifications}
                    renderItem={({item}) => <ItemListNotification key={item.id} data={item} handleNav={handleNav} />}
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
