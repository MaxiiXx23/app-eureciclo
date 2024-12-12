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
import { SelectImagePicker } from "components/molecules/SelectImagePicker";

export function Profile() {
    return(
        <Container>

            <WrapperProfile>
                <SelectImagePicker />
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