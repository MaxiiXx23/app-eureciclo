import { Recycle } from "phosphor-react-native";
import { Container, Content, TextInfo, TextTitle, WrapperIcon } from "./styles";

export function ItemActivity() {
    return(
        <Container>
            <WrapperIcon>
                <Recycle size={32} color="#FFF" />
            </WrapperIcon>
            <Content>
                <TextTitle>Jardim Caiubi - SP</TextTitle>
                <TextInfo>18 de jul - 10:17</TextInfo>
            </Content>
            <Content>
                <TextTitle>Coletor</TextTitle>
                <TextInfo>Jailson</TextInfo>
            </Content>
        </Container>
    )
}