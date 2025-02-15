import { useContext } from "react";

import { Star } from "phosphor-react-native";

import { AuthContext } from "contexts/AuthContext";

import { SelectImagePicker } from "components/molecules/SelectImagePicker";
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
export function Profile() {

    const { userAuth } = useContext(AuthContext)

    const name = `${userAuth.firstName} ${userAuth.lastName}`

    return(
        <Container>

            <WrapperProfile>
                <SelectImagePicker urlImage={userAuth.urlImageProfile} isUser />
                <Name>{name}</Name>
                <WrapperLabel>
                    <LabelRating>
                        Sua avaliação: <TextRating>{userAuth.rating}</TextRating>
                    </LabelRating>
                    <Star size={24} color='#FDE047' weight="fill" />
                </WrapperLabel>
            </WrapperProfile>

            <WrapperTitle>
                <Icons.iconHeartTree />
                <Description>Amigo da Terra</Description>
            </WrapperTitle>

        </Container>
    )
}