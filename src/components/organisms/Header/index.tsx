import { EnvelopeSimple, HandCoins } from "phosphor-react-native";
import { BtnAction, Container, ContainerBtns } from "./styles";

import { Logo } from "components/molecules/Logo";

export function Header() {
    return (
        <Container>
            <Logo />
            <ContainerBtns>
                <BtnAction>
                    <EnvelopeSimple size={32} color="#FFFF" />
                </BtnAction>
                <BtnAction>
                    <HandCoins size={32} color="#FFFF" />
                </BtnAction>
            </ContainerBtns>
        </Container>
    )
}