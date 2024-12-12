import { ElementType } from "react";

import { Container, Title, Wrapper } from "./styles";
import { CaretRight } from "phosphor-react-native";

import { TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
    icon: ElementType
    label: string
}

export function BtnNavArrow({ icon:Icon, label, ...rest }: IProps) {
    return (
        <Container {...rest}>
            <>
            <Wrapper>
                <Icon size={24} color='#4ADE80' />
                <Title>{label}</Title>
            </Wrapper>
            <CaretRight size={24} />
            </>

      </Container>
    )
}