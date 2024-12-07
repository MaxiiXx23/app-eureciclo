import { CaretLeft, CaretRight } from "phosphor-react-native";
import { ButtonNav, Container } from "./styles";

export function Pagination() {
    return (
        <Container>
            <ButtonNav>
                <CaretLeft size={32} color="#FFF" />
            </ButtonNav>

            <ButtonNav>
                <CaretRight size={32} color="#FFF" />
            </ButtonNav>
        </Container>
    )
}