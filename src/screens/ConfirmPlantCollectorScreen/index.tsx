import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'

import { ContainerInfo, Content, Description, DescriptionTitleIcon, Header, SubTitleIcon, Title, TitleIcon, WrapperIcon } from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Button } from 'components/atoms/Button'
import { SealCheck } from 'phosphor-react-native'


export function ConfirmPlantCollectorScreen() {
  const theme = useTheme()

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

                    <Button title="Cadastrar-me" color="primary" />
                </ContainerInfo>


          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
