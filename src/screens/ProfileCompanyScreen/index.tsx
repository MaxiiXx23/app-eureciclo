import { useEffect, useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { CompaniesAPIs } from 'apis/companies'

import { House, Receipt, TextAlignLeft } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfos, Content, HeaderLabel, HeaderTitle, Label, WrapperLabel } from './styles'
import { SubHeader } from 'components/molecules/SubHeader'
import { InfoEmpty } from 'components/molecules/InfoEmpty'
import { PreviewImage } from 'components/atoms/PreviewImage'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { IInfoProfileCompanyDTO } from 'dtos/companies'

export function ProfileCompanyScreen() {
  const { params } = useRoute()
  const [data, setData] = useState<IInfoProfileCompanyDTO | undefined>()

  // Falta pegar a Foto de perfil da Empresa através da API
  async function fetch() {
    try {
      if(!params?.id) {
        throw new Error("Id não encontrado!")        
      } else {

        const { id } = params as CollectStackParamList['ProfileInfoCompany']

        const response = await CompaniesAPIs.getInfoProfile(id)

        setData(response.data.company)
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
            <InfoEmpty description='Empresa não encontrada' />
        ): (
          <Content>
            <SubHeader title='Informações da empresa' description='Verifique as informações da empresa.' />
            <ContainerInfos>
              <PreviewImage urlImage={data.urlImage} />
              <WrapperLabel>
                  <HeaderLabel>
                    <Receipt size={24} color='#4ADE80' />
                    <HeaderTitle>Nome</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.fantasyName}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <Receipt size={24} color='#4ADE80' />
                    <HeaderTitle>CNPJ</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.docIdentification}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <Receipt size={24} color='#4ADE80' />
                    <HeaderTitle>E-mail</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.email}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <Receipt size={24} color='#4ADE80' />
                    <HeaderTitle>Telefone</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.phone}</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <TextAlignLeft size={24} color='#4ADE80' />
                    <HeaderTitle>Descrição</HeaderTitle>
                  </HeaderLabel>
                  <Label>{data.description}</Label>
              </WrapperLabel>

              {
                data.address && (
                    <WrapperLabel>
                        <HeaderLabel>
                            <House size={24} color='#4ADE80' />
                            <HeaderTitle>Endereço</HeaderTitle>
                        </HeaderLabel>
                        <Label>{data.address.street}, n° {data.address.number} - {data.address.district}</Label>
                        <Label>{data.address.city} - {data.address.state}</Label>
                    </WrapperLabel>

                )
              }

            </ContainerInfos>
            
          </Content>
        )}


      </ContainerMain>
    </SafeAreaProvider>

  )
}
