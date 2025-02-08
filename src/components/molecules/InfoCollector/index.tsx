import { Info, Star } from 'phosphor-react-native'

import { Container, Content, HeaderLabel, HeaderTitle, HeaderTitleLabel, Label, WrapperLabel, } from './styles'

interface IProps {
  data: {
    id: number
    name: string
    rating: number
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
                  <HeaderLabel>
                    <Label>{data.name} -</Label>
                    <Label>{data.rating}</Label>
                    <Star size={24} color='#FDE047'weight="fill" />
                  </HeaderLabel>
            </WrapperLabel>
        </Content>

    </Container>

  )
}
