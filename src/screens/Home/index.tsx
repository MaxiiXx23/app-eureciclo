import { useCallback, useState } from 'react'

import { ToastAndroid } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { PostsAPIs } from 'apis/post';

import { ContainerMain } from 'components/templates/Container/styles'
import { ListCardsHorizontal } from 'components/organisms/ListCardsHorizontal'
import { Ads } from 'components/organisms/Ads'
import { Header } from 'components/organisms/Header'
import { Content } from './styles'

import { AxiosError } from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IResponseGetListPosts } from 'dtos/post';
import { HomeStackParamList } from 'shared/routes/stacksParamsList';
import { Loading } from 'components/molecules/Loading';

type NavProps = NativeStackNavigationProp<HomeStackParamList, 'Home'>

export function HomeScreen() {

  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
  const navigation = useNavigation<NavProps>()

  const [news, setNews] = useState<IResponseGetListPosts | undefined>()
  const [topics, setTopics] = useState<IResponseGetListPosts | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function getListNews() {
    const response = await PostsAPIs.getPostsByType({
      page: 1,
      perPage: 5,
      type: 1
    })

    return response.data

  }

  async function getListTopics() {
    const response = await PostsAPIs.getPostsByType({
      page: 1,
      perPage: 5,
      type: 2
    })

    return response.data

  }

  function handleNav(id: number) {
    navigation.navigate('Post', {
      id
    })
  }

    useFocusEffect(
      useCallback(() => {
        setIsLoading(true)
        getListNews().then((data) =>  {
          setNews(data)
           
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            return showToast(error.response?.data.messsage)
          }
        
          return showToast("Erro não buscar Notícias! Por Favor, tente novamente.")
        })

        getListTopics().then((data) =>  {
          setTopics(data)
           
          setIsLoading(false)
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            return showToast(error.response?.data.messsage)
          }
        
          return showToast("Erro não buscar Notícias! Por Favor, tente novamente.")
        })
      }, [])    
    )

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />

            {isLoading ? <Loading /> : (
              <Content>
                <Ads />
                <ListCardsHorizontal handleNav={handleNav} title='Notícias' data={news} />
                <ListCardsHorizontal handleNav={handleNav} title='Tópicos da semana' data={topics} />
              </Content>
            )}
      </ContainerMain>
    </SafeAreaProvider>

  )
}
