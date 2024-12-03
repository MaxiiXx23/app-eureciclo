import { TouchableOpacityProps } from "react-native"
import { Container, ContainerImage, Content, Description, Title } from "./styles"

interface IProps extends TouchableOpacityProps {
    title: string
    description: string
}

export function CardCollect({ title, description, ...rest }: IProps) {
    return  (
        <Container {...rest}>
            
            <>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
                <ContainerImage source={require('../../../assets/images/reciclaveis.png')} />
            </>

        </Container>
    )
}