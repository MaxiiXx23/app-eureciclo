
import { StarHalf } from "phosphor-react-native";
import { Container, Content, ContentRating, ImageProfileCompany, TextInfo, TextTitle } from "./styles";
import { IGetItemListNotificationDTO } from "dtos/notifications";

interface IProps {
    data: IGetItemListNotificationDTO
    handleNav(id: number): void
}

export function ItemListNotification({ data, handleNav }: IProps) {
    return(
        <Container onPress={() => handleNav(data.data.type === 1 ? data!.company!.id : data.user.id)} >
            <ImageProfileCompany src={data.data.type === 1 ? data.company?.urlImage : data.user.urlImage} />
            <ContentRating>
                <TextInfo>{data.data.title}</TextInfo>
            </ContentRating>
            <Content>
                <ContentRating>
                    <TextInfo>{data.createdAt}</TextInfo>
                </ContentRating>
                
            </Content>
        </Container>
    )
}