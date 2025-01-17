import { TouchableOpacityProps } from "react-native"
import { Container, ContainerImage, Content, Description, Title } from "./styles"
import { services } from "config/services"

interface IProps extends TouchableOpacityProps {
    title: string
    description: string
    urlImage: string
}

export function CardCollect({ title, description, urlImage, ...rest }: IProps) {
    
    const image = `${services.baseUrl}/imagens/${urlImage}`

    return  (
        <Container {...rest}>
            
            <>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
                <ContainerImage src={image} />
            </>

        </Container>
    )
}