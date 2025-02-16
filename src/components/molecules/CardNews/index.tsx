import { CaretRight } from "phosphor-react-native";
import { BtnArrow, Container, ContainerDescription, ContainerImage, Title } from "./styles";

interface IProps {
    id: number
    title: string
    btnText: string
    urlImage: string
    handleNav(id: number): void
}

export function CardNews({ id, title, urlImage, btnText, handleNav }: IProps) {
  
    return (
      <Container onPress={() => handleNav(id)}>
        <ContainerDescription>
            <Title>{title}</Title>
            <BtnArrow onPress={() => handleNav(id)}>
                {btnText} <CaretRight color="#F0F2F5" size={12} />
            </BtnArrow>
        </ContainerDescription>
        <ContainerImage src={urlImage} />
      </Container>
    )
  }