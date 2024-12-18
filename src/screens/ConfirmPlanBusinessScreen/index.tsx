import { useNavigation } from '@react-navigation/native'
import { SealCheck } from 'phosphor-react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfo, Content, Description, DescriptionTitleIcon, Header, SubTitleIcon, Title, TitleIcon, WrapperIcon } from './styles'
import { Button } from 'components/atoms/Button'

import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'

type NavProps = NativeStackNavigationProp<RegisterBusinessStackParamList>

export function ConfirmPlanBusinessScreen() {

  const navigation = useNavigation<NavProps>()

  function handleNavToCheckoutScreen() {
    navigation.navigate('CheckoutPayment')
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
                        <SubTitleIcon>Primeiro Mês por R$59,90</SubTitleIcon>
                        <DescriptionTitleIcon>R$89,90 após o primeiro mês.</DescriptionTitleIcon>
                        <DescriptionTitleIcon>Coletores a poucos cliques de você!</DescriptionTitleIcon>
                    </WrapperIcon>

                    <Button title="Adquirir Plano" color="primary" onPress={handleNavToCheckoutScreen} />
                </ContainerInfo>


          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
