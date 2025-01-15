import { Recycle } from "phosphor-react-native";
import { Container, Content, TextInfo, TextTitle, WrapperIcon } from "./styles";
import { IGetListCollectsByUserDTO } from "dtos/collects";

interface IProps {
    data: IGetListCollectsByUserDTO
    handleNav(id: number): void
}

export function ItemActivity({ data, handleNav }: IProps) {
    return(
        <Container onPress={() => handleNav(data.id)} >
            <WrapperIcon>
                <Recycle size={32} color="#FFF" />
            </WrapperIcon>
            <Content>
                <TextTitle>{data.status.name}</TextTitle>
            </Content>
            <Content>
                <TextInfo>{data.createdAt}</TextInfo>
            </Content>
        </Container>
    )
}