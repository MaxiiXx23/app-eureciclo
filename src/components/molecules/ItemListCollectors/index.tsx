
import { StarHalf } from "phosphor-react-native";
import { Container, Content, ContentRating, ImageProfileCompany, TextInfo, TextTitle } from "./styles";
import { IGetItemListCollectorDTO } from "dtos/user";

interface IProps {
    data: IGetItemListCollectorDTO
    handleNav(id: number): void
}

export function ItemListCollectors({ data, handleNav }: IProps) {
    return(
        <Container onPress={() => handleNav(data.id)} >
            <ImageProfileCompany src={data.urlImage} />
            <Content>
                <TextTitle>{data.name}</TextTitle>
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