import { Button } from 'components/atoms/Button'
import { Container, Content, HeaderLabel, HeaderTitle, } from './styles'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

export function InfoCollector() {

  return (
    <Container>
        <Content>
            <HeaderLabel>
                <HeaderTitle>Coletor</HeaderTitle>
            </HeaderLabel>

            <ButtonArrow title='Informações do coletor' />

            <Button color='button' title='conversa' /> 
        </Content>

    </Container>

  )
}
