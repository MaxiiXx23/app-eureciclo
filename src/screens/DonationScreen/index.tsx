import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInfos, ContainerThanks, Content, Description, DescriptionThanks, Header, LabelInfo, TextThanks, Title, TitleInfo, WrapperInfo, WrapperTitle } from './styles'
import { Icons } from 'shared/imports/icons'

export function DonationScreen() {

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Faça uma doação</Title>
                    <Description>
                        Ajude-nos com qualquer valor. Sua pequena ajuda, manterá a nossa ideia no ar e ajudando o planeta.
                    </Description>
                </Header>

                <ContainerInfos>
                        <TitleInfo>
                            Chaves Pix
                        </TitleInfo>

                    <WrapperInfo>
                        <LabelInfo>
                            E-mail
                        </LabelInfo>
                        <Description>
                            apoiemeeureciclo@eureciclo.com
                        </Description>
                    </WrapperInfo>

                    <WrapperInfo>
                        <LabelInfo>
                            CNPJ
                        </LabelInfo>
                        <Description>
                            92.754.738/0001-62
                        </Description>
                    </WrapperInfo>
                </ContainerInfos>

                <ContainerThanks>
                    <TextThanks>
                        Nossa equipe e o Planeta Terra agradeçemos a sua ajuda!
                    </TextThanks>
                    <WrapperTitle>
                        <Icons.iconHeartTree />
                        <DescriptionThanks>Amigo da Terra</DescriptionThanks>
                    </WrapperTitle>
                </ContainerThanks>
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
