import { useCallback, useState } from 'react'

import { ToastAndroid } from 'react-native';

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFocusEffect, useRoute } from '@react-navigation/native';

import { PostsAPIs } from 'apis/post';

import { ContainerMain } from 'components/templates/Container/styles'
import { Container, Content, Description, PostDate, PostImage } from './styles'

import { IResponseGetPost } from 'dtos/post';
import { AxiosError } from 'axios';


export function PostScreen() {

  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }

  const { params } = useRoute()

  const [data, setData] = useState<IResponseGetPost | undefined>()

    useFocusEffect(
      useCallback(() => {
        PostsAPIs.getPostById(params!.id).then((data) =>  {
          setData(data.data)
           
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            return showToast(error.response?.data.messsage)
          }
        

          return showToast("Erro não buscar postagem! Por Favor, tente novamente.")
        })

      }, [])    
    )

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            {!data ? null : (
                <Container>

                    {/* Imagem do Post */}
                    <PostImage source={{ uri: data.post.file }} />

                    <Description>
                        {data.post.description}
                    </Description>

                    <PostDate>{formatDistanceToNow(new Date(data.post.createdAt), { addSuffix: true, locale: ptBR })}</PostDate>
                </Container>
            )}
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
