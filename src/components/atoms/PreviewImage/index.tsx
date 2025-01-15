import { Container, ContainerPreview, Preview} from './styles'

interface IProps {
    urlImage: string
}

export function PreviewImage({ urlImage }: IProps) {

  return (
    <Container>
        <ContainerPreview>
            <Preview src={urlImage} /> 
            
        </ContainerPreview>
    </Container>

  )
}
