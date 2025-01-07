import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosError } from 'axios'

import { SealCheck } from 'phosphor-react-native'

import { AuthAPIs } from 'apis/auth'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfo, Content, Description, DescriptionTitleIcon, Header, SubTitleIcon, Title, TitleIcon, WrapperIcon } from './styles'
import { Button } from 'components/atoms/Button'

import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'

type NavProps = NativeStackNavigationProp<RegisterBusinessStackParamList>

export function ConfirmPlanBusinessScreen() {

  const navigation = useNavigation<NavProps>()

  async function handleRequest() {
    try {
      const jsonUser = await AsyncStorage.getItem('@EuReciclo:registerUser');
      const jsonBusiness = await AsyncStorage.getItem('@EuReciclo:registerBusiness');

      if(jsonUser === null || jsonBusiness === null) {
        throw new Error("Informações não encontradas.")
      }

      const userData = JSON.parse(jsonUser)
      const companyData = JSON.parse(jsonBusiness)

      await AuthAPIs.registerUserAndCompany({
        user: userData,
        company: companyData
      })

      await AsyncStorage.removeItem('@EuReciclo:registerUser')
      await AsyncStorage.removeItem('@EuReciclo:registerBusiness')

      navigation.navigate('LoginScreen')
    } catch (error) {
      console.log(error)
      if(error instanceof AxiosError) {
        console.log(error.message)
      }
    }
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Plano de assinatura - Empresa</Title>
                    <Description>
                        Informações sobre o Plano Empresa.
                    </Description>
                </Header>

                <ContainerInfo>
                    <WrapperIcon>
                        <SealCheck size={96} color="#4ADE80" />
                        <TitleIcon>Plano Empresa</TitleIcon>
                        <SubTitleIcon>Primeiro Mês Grátis</SubTitleIcon>
                        <DescriptionTitleIcon>R$89,90 após o primeiro mês.</DescriptionTitleIcon>
                        <DescriptionTitleIcon>Coletores a poucos cliques de você!</DescriptionTitleIcon>
                    </WrapperIcon>

                    <Button title="Confirmar Cadastro" color="primary" onPress={handleRequest} />
                </ContainerInfo>


          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
