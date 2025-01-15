import { WarningCircle } from "phosphor-react-native";
import { Container, Description } from "./styles";

interface IProps {
    description: string
}

export function InfoEmpty({ description }: IProps) {
    return (
        <Container>
            <WarningCircle size={32} />
            <Description>{description}</Description>
        </Container>
    )
}