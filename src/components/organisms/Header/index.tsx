import { useNavigation } from '@react-navigation/native'

import { Bell, HandCoins } from "phosphor-react-native";

import { BtnAction, Container, ContainerBtns } from "./styles";
import { Logo } from "components/molecules/Logo";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from 'shared/routes/stacksParamsList';

type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function Header() {
    const navigation = useNavigation<NavProps>()

    function handleNavToDonation() {
        navigation.navigate('Donation')
    }

    function handleNavToNotifications() {
        navigation.navigate('Notifications')
    }
    return (
        <Container>
            <Logo />
            <ContainerBtns>
                <BtnAction onPress={handleNavToNotifications}>
                    <Bell size={32} color="#FFFF" />
                </BtnAction>
                <BtnAction onPress={handleNavToDonation}>
                    <HandCoins size={32} color="#FFFF" />
                </BtnAction>

            </ContainerBtns>
        </Container>
    )
}