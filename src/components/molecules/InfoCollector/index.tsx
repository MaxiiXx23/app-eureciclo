import { Info } from 'phosphor-react-native'

import { Container, Content, HeaderLabel, HeaderTitle, HeaderTitleLabel, Label, WrapperLabel, } from './styles'
import { IGetInfoCollectDTO } from 'dtos/collects'

interface IProps {
  data: {
    id: number
    name: string
    createdAt: string
  }
}

export function InfoCollector({ data }: IProps) {

  return (
    <Container>
        <Content>
            <HeaderLabel>
                <HeaderTitle>Informações do Coletor</HeaderTitle>
            </HeaderLabel>

            <WrapperLabel>
                  <HeaderLabel>
                    <Info size={24} color='#4ADE80' />
                    <HeaderTitleLabel>Nome</HeaderTitleLabel>
                  </HeaderLabel>
                  <Label>{data.name}</Label>
            </WrapperLabel>
        </Content>

    </Container>

  )
}
