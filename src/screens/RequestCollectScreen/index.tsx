import { ContainerMain } from 'components/templates/Container/styles'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { BtnTitle, ButtonAddress, ContainerInput, Content, Header, HeaderInput, LabelInput, TextAddress, TextArea, WrapperTitleInput } from './styles'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MapPinLine, Recycle, TextAlignLeft } from 'phosphor-react-native'
import { BtnOpenCamera } from 'components/molecules/BtnOpenCamera'
import { Button } from 'components/atoms/Button'

type NavProps = NativeStackNavigationProp<CollectStackParamList>


// Aplicar o React Hook-form nesse Componente/Tela

export function RequestCollectScreen() {
  const navigation = useNavigation<NavProps>()

  function handleNavToSignIn() {
    navigation.navigate('Request')
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
            <ContainerInput>
              <HeaderInput>
                <Recycle size={28} color='#4ADE80' />
                <LabelInput>Adicionar imagem</LabelInput>
              </HeaderInput>
              <BtnOpenCamera />
            </ContainerInput>
            <ContainerInput>
              <HeaderInput>
                <TextAlignLeft size={28} color='#4ADE80' />
                <LabelInput>Descrição</LabelInput>
              </HeaderInput>
              <TextArea />
            </ContainerInput>
            <ContainerInput>
              <Header>
                <WrapperTitleInput>
                  <MapPinLine size={28} color='#4ADE80' />
                  <LabelInput>Endereço</LabelInput>
                </WrapperTitleInput>
                <ButtonAddress>
                  <BtnTitle>Atualizar</BtnTitle>
                </ButtonAddress>
              </Header>
              <TextAddress>Rua das Pérolas, n° 23 - Jardim Pérola</TextAddress>
            </ContainerInput>

            <Button color='primary' title='Confirmar' />

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
