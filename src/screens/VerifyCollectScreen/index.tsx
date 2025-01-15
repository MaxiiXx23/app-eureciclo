import { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { House, Info, Receipt, TextAlignLeft } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfos, Content, HeaderLabel, HeaderTitle, Label, WrapperLabel } from './styles'
import { SubHeader } from 'components/molecules/SubHeader'
import { PreviewImage } from 'components/atoms/PreviewImage'
import { InfoCollector } from "components/molecules/InfoCollector"

import { ActivitiesStackParamList, CollectStackParamList } from 'shared/routes/stacksParamsList'
import { IGetInfoCollectDTO } from 'dtos/collects'
import { CollectsAPIs } from 'apis/collects'
import { InfoEmpty } from 'components/molecules/InfoEmpty'


type NavProps = NativeStackNavigationProp<CollectStackParamList, 'CollectInitial'>

export function VerifyCollectScreen() {
  const { params } = useRoute()

  const [data, setData] = useState<IGetInfoCollectDTO | undefined>()

  const navigation = useNavigation<NavProps>()

  function handleNavToSignIn() {
    navigation.navigate('Request')
  }

  async function fetch() {
    try {
      if(params) {

        const { id } = params as ActivitiesStackParamList['Verify']

        const response = await CollectsAPIs.getCollectById(id)

        setData(response.data.collect)
        
      } else {
        const response = await CollectsAPIs.getInProgressByUserId()

        setData(response.data.collect)
      }

    } catch (error) {
      console.log(error)
    }
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
              <WrapperLabel>
                  <HeaderLabel>
                    <Receipt size={24} color='#4ADE80' />
                    <HeaderTitle>Número de identificação</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.code}</Label>
              </WrapperLabel>

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

              {data.collector && (
                <InfoCollector data={data.collector} />
              )}
              
            </ContainerInfos>

            {/* <Button color='dangerPrimary' title='cancelar' /> */}
          </Content>
        )}


      </ContainerMain>
    </SafeAreaProvider>

  )
}
