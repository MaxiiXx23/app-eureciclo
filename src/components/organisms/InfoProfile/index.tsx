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

export function InfoProfile() {
    return(
        <Container>

        <WrapperProfile>
            <ProfileImage src='https://github.com/MaxiiXx23.png' />
            <Name>Max Jônatas</Name>
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