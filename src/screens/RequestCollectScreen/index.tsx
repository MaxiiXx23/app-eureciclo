import { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'

import { MapPinLine, Recycle, TextAlignLeft } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { BtnTitle, ButtonAddress, ContainerInput, Content, Header, HeaderInput, LabelInput, TextAddress, TextArea, WrapperTitleInput } from './styles'
import { BtnOpenCamera } from 'components/molecules/BtnOpenCamera'
import { Button } from 'components/atoms/Button'

import { formTypeRequestCollectSchema, requestCollectSchema } from 'schemas/collect/requestCollectSchema'

type NavProps = NativeStackNavigationProp<CollectStackParamList>


// Aplicar o React Hook-form nesse Componente/Tela

export function RequestCollectScreen() {
  const navigation = useNavigation<NavProps>()

  const { register, setValue, control, handleSubmit} = useForm<formTypeRequestCollectSchema>({
    resolver: zodResolver(requestCollectSchema),
  })

  const onSubmit: SubmitHandler<formTypeRequestCollectSchema> = async (data) => {

    try {
      console.log('Requisição feita!')
    } catch (e) {
      // saving error
      console.log("Erro ao salvar!")
    }

  }

  function handleNavToAddressUpdate() {
    navigation.navigate('Address')
  }

  useEffect(() => {
    register('description')
  }, [register])

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
              <TextArea

                onChangeText={text => setValue('description', text)}
              />
            </ContainerInput>
            <ContainerInput>
              <Header>
                <WrapperTitleInput>
                  <MapPinLine size={28} color='#4ADE80' />
                  <LabelInput>Endereço</LabelInput>
                </WrapperTitleInput>
                <ButtonAddress onPress={handleNavToAddressUpdate}>
                  <BtnTitle>Atualizar</BtnTitle>
                </ButtonAddress>
              </Header>
              <TextAddress>Rua das Pérolas, n° 23 - Jardim Pérola</TextAddress>
            </ContainerInput>

            <Button color='primary' title='Confirmar' onPress={handleSubmit(onSubmit)} />

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
