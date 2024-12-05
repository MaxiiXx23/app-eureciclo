import { ContainerMain } from 'components/templates/Container/styles'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerInfos, Content, HeaderLabel, HeaderTitle, Label, WrapperLabel } from './styles'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SubHeader } from 'components/molecules/SubHeader'
import { House, Info, Receipt, TextAlignLeft } from 'phosphor-react-native'
import { Button } from 'components/atoms/Button'
import { PreviewImage } from 'components/atoms/PreviewImage'
import { InfoCollector } from "components/molecules/InfoCollector"

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'CollectInitial'>

export function VerifyCollectScreen() {

  const navigation = useNavigation<NavProps>()

  function handleNavToSignIn() {
    navigation.navigate('Request')
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <SubHeader title='Status da Coleta' description='Verifique o status da solicitação de coleta.' />
            <ContainerInfos>
              <PreviewImage />
              <WrapperLabel>
                  <HeaderLabel>
                    <Receipt size={24} color='#4ADE80' />
                    <HeaderTitle>Número de identificação</HeaderTitle>
                  </HeaderLabel>
                  <Label>a584d241-4326-475e-8662-5ecd304ad5bc</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <TextAlignLeft size={24} color='#4ADE80' />
                    <HeaderTitle>Descrição</HeaderTitle>
                  </HeaderLabel>
                  <Label>Cinco sacos contendo garrafas pets.</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <House size={24} color='#4ADE80' />
                    <HeaderTitle>Endereço</HeaderTitle>
                  </HeaderLabel>
                  <Label>Rua das Pérolas, n° 23 - Jardim Pérola</Label>
              </WrapperLabel>

              <WrapperLabel>
                  <HeaderLabel>
                    <Info size={24} color='#4ADE80' />
                    <HeaderTitle>Etapa</HeaderTitle>
                  </HeaderLabel>
                  <Label>Aguardando Coletor aceitar a sua solicitação.</Label>
              </WrapperLabel>
            </ContainerInfos>

            {/* <Button color='dangerPrimary' title='cancelar' /> */}

            <InfoCollector />
          </Content>


      </ContainerMain>
    </SafeAreaProvider>

  )
}
