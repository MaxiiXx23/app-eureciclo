import { Star } from "phosphor-react-native";

import { 
    Container, 
    Description, 
    LabelRating, 
    Name, 
    ProfileImage, 
    TextRating, 
    WrapperLabel, 
    WrapperProfile, 
    WrapperTitle 
} from "./styles";
import { Icons } from "shared/imports/icons";
import { IGetInfoUserDTO } from "dtos/user";

interface IProps {
    data: IGetInfoUserDTO
}

export function InfoProfileByUser({ data }: IProps) {

    return(
        <Container>

            <WrapperProfile>
                <ProfileImage src={data.urlImage} />
                <Name>{data.name}</Name>
                <WrapperLabel>
                    <LabelRating>
                        Sua avaliação: <TextRating>4.8</TextRating>
                    </LabelRating>
                    <Star size={24} color='#FDE047' />
                </WrapperLabel>
            </WrapperProfile>

            <WrapperTitle>
                <Icons.iconHeartTree />
                <Description>Amigo da Terra</Description>
            </WrapperTitle>



        </Container>
    )
}