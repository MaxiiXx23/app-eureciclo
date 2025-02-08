import { useContext, useEffect, useState } from 'react'

import { ToastAndroid } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'
import { CollectsAPIs } from 'apis/collects'

import { House, Info, Receipt, Star, TextAlignLeft } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfos, Content, ContentRating, HeaderLabel, HeaderTitle, Label, WrapperLabel } from './styles'
import { SubHeader } from 'components/molecules/SubHeader'
import { PreviewImage } from 'components/atoms/PreviewImage'
import { InfoCollector } from "components/molecules/InfoCollector"
import { InfoEmpty } from 'components/molecules/InfoEmpty'
import { Button } from 'components/atoms/Button'

import { ActivitiesStackParamList, CollectStackParamList } from 'shared/routes/stacksParamsList'
import { IGetInfoCollectDTO } from 'dtos/collects'
import { AxiosError } from 'axios'

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'Initial'>

export function VerifyCollectScreen() {
  const { params } = useRoute()
  const navigation = useNavigation<NavProps>()
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }

  const [data, setData] = useState<IGetInfoCollectDTO | undefined>()

  const { userAuth } = useContext(AuthContext)

  async function fetch() {
    try {
      if(!params?.id) {
        const response = await CollectsAPIs.getInProgressByUserId()

        setData(response.data.collect)
        
      } else {

        const { id } = params as ActivitiesStackParamList['Verify']

        const response = await CollectsAPIs.getCollectById(id)

        setData(response.data.collect)
      }

    } catch (error) {
        if (error instanceof AxiosError) {
          return showToast(error.response?.data.messsage)
        }
      
        return showToast("Erro ao buscar dados! Por Favor, tente novamente.")
    }
  }

  async function fetchCreateInProcess() {
    try {

      if(!params) {
        throw new Error("ID não encontrado!")
      }

      const { id } = params as ActivitiesStackParamList['Verify']

      await CollectsAPIs.createInProgressByCollector(id)

      navigation.navigate('SearchCollects')

    } catch (error) {
        if (error instanceof AxiosError) {
          return showToast(error.response?.data.messsage)
        }
      
        return showToast("Erro ao solicitar coleta! Por Favor, tente novamente.")
    }
  }

  function handleNavConfirmCollect() {
    navigation.navigate('ConfirmCollect', {
      id: params!.id
    })
  }

  function handleNavSendReview() {

    if(!data) return

    navigation.navigate('SendReview', {
      id: params!.id,
      reviewedUserId: userAuth.typeUserId === 1 ? data.collector!.id : data.user.id
    })
  }
  
  useEffect(() => {
    fetch().then().catch()
  }, [])

  return (
    <SafeAreaProvider>
      <ContainerMain>

        {!data ? (
            <InfoEmpty description='Nenhuma coleta em andamento!' />
        ): (
          <Content>
            <SubHeader title='Status da Coleta' description='Verifique o status da solicitação de coleta.' />
            <ContainerInfos>
              <PreviewImage urlImage={data.image.url} />
              
              {
                data.status.id === 3 && userAuth.typeUserId === 2 ? null : (
                  <WrapperLabel>
                    <HeaderLabel>
                      <Receipt size={24} color='#4ADE80' />
                      <HeaderTitle>Número de identificação</HeaderTitle>
                    </HeaderLabel>
                    <Label>{data.code}</Label>
                  </WrapperLabel>
                )
              }

              <WrapperLabel>
                  <HeaderLabel>
                    <TextAlignLeft size={24} color='#4ADE80' />
                    <HeaderTitle>Descrição</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.description}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <House size={24} color='#4ADE80' />
                    <HeaderTitle>Endereço</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.addresses.street}, n° {data.addresses.number} - {data.addresses.district}</Label>
                  <Label>{data.addresses.city} - {data.addresses.state}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <Info size={24} color='#4ADE80' />
                    <HeaderTitle>Etapa</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.status.name}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <Info size={24} color='#4ADE80' />
                    <HeaderTitle>Solicitante</HeaderTitle>
                  </HeaderLabel>
                  <HeaderLabel>
                    <Label>{data.user.name} -</Label>
                    <ContentRating>
                      <Label>{data.user.rating}</Label> 
                      <Star size={24} color='#FDE047'weight="fill" />
                    </ContentRating>
                  </HeaderLabel>

              </WrapperLabel>

              {data.collector && (
                <InfoCollector data={data.collector} />
              )}
              
              {userAuth.typeUserId === 2 && data.status.id === 4 && (
                <Button color='primary' title='Quero Coletar' onPress={fetchCreateInProcess} />
              )}

              {userAuth.typeUserId === 2 && data.status.id === 3 && (
                <Button color='button' title='Confirmar Coleta' onPress={handleNavConfirmCollect} />
              )}

              {
                data.status.id === 1 && (
                  <Button color='button' title='Avaliar' onPress={handleNavSendReview} />
                )
              }

            </ContainerInfos>
            
          </Content>
        )}


      </ContainerMain>
    </SafeAreaProvider>

  )
}
