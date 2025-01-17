
import { Buildings, StarHalf } from "phosphor-react-native";
import { Container, Content, ContentRating, TextInfo, TextTitle, WrapperIcon } from "./styles";
import { IItemListCompanyDTO } from "dtos/companies";

interface IProps {
    data: IItemListCompanyDTO
    handleNav(id: number): void
}

export function ItemListCompany({ data, handleNav }: IProps) {
    return(
        <Container onPress={() => handleNav(data.id)} >
            <WrapperIcon>
                <Buildings size={32} color="#FFF" />
            </WrapperIcon>
            <Content>
                <TextTitle>{data.fantasyName}</TextTitle>
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