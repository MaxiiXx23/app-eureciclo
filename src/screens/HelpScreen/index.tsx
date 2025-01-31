import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerNavs, Content, Description, Header, Title } from './styles'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

export function HelpScreen() {

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Todos os tópicos</Title>
                    <Description>
                        Veja alguns tópicos, perguntas e respostas para as principais dúvidas dos usuários.
                    </Description>
                </Header>

                <ContainerNavs>
                    <ButtonArrow title='Conta' />
                    <ButtonArrow title='Problemas com a coleta' />
                    <ButtonArrow title='Guia sobre como usar o app' />
                    <ButtonArrow title='Acessibilidade' />
                    <ButtonArrow title='Segurança' />
                    <ButtonArrow title='Quero me tornar um Coletor' />
                    <ButtonArrow title='Como ajudar o projeto EuReciclo' />
                </ContainerNavs>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
