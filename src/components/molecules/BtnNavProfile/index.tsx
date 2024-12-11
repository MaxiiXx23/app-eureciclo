import { TouchableHighlightProps } from "react-native";
import { Container, TitleBtn } from "./styles";
import { ElementType } from "react";

interface IProps extends TouchableHighlightProps {
    icon: ElementType
    title: string
}

export function BtnNavProfile({ icon: Icon, title, ...rest }: IProps) {
    return(
        <Container {...rest}>
            <>
                <Icon size={32} color='#FFF' />
                <TitleBtn>{title}</TitleBtn>
            </>
        </Container>
    )
}