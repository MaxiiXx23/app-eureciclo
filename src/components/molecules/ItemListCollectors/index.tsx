
import { StarHalf, User } from "phosphor-react-native";
import { Container, Content, ContentRating, TextInfo, TextTitle, WrapperIcon } from "./styles";
import { IGetItemListCollectorDTO } from "dtos/user";

interface IProps {
    data: IGetItemListCollectorDTO
    handleNav(id: number): void
}

export function ItemListCollectors({ data, handleNav }: IProps) {
    return(
        <Container onPress={() => handleNav(data.id)} >
            <WrapperIcon>
                <User size={32} color="#FFF" />
            </WrapperIcon>
            <Content>
                <TextTitle>{`${data.firstName} ${data.lastName}`}</TextTitle>
            </Content>
            <Content>
                <ContentRating>
                        <TextInfo>4.8</TextInfo>
                        <StarHalf size={24} color="#FDE047" />
                </ContentRating>
                
            </Content>
        </Container>
    )
}