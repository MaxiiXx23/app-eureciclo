import { StarHalf } from "phosphor-react-native";
import { Container, Content, ContentRating, ImageProfileCompany, TextInfo, TextTitle } from "./styles";
import { IItemListCompanyDTO } from "dtos/companies";

interface IProps {
    data: IItemListCompanyDTO
    handleNav(id: number): void
}

export function ItemListCompany({ data, handleNav }: IProps) {
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