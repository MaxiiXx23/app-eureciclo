import { SafeAreaProvider } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SealCheck } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfo, Content, Description, DescriptionTitleIcon, Header, SubTitleIcon, Title, TitleIcon, WrapperIcon } from './styles'
import { Button } from 'components/atoms/Button'


export function ConfirmPlantCollectorScreen() {

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@EuReciclo:registerCollector');

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return null
    }
  };

  async function handleRegister() {
    
    // Usar o 'dataForm' para resgatar as informações do form e registrar o usuário
    const dataForm = await getData()

    console.log(dataForm)
  }


  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Plano de assinatura - Coletor</Title>
                    <Description>
                        Informações sobre o Plano Coletor.
                    </Description>
                </Header>

                <ContainerInfo>
                    <WrapperIcon>
                        <SealCheck size={96} color="#4ADE80" />
                        <TitleIcon>Plano Coletor</TitleIcon>
                        <SubTitleIcon>Primeiro Mês Grátis</SubTitleIcon>
                        <DescriptionTitleIcon>R$19,90 após o primeiro mês.</DescriptionTitleIcon>
                        <DescriptionTitleIcon>Coletas ilimitadas!</DescriptionTitleIcon>
                    </WrapperIcon>

                    <Button title="Cadastrar-me" color="primary" onPress={handleRegister} />
                </ContainerInfo>


          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
