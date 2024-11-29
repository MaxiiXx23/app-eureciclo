import { CaretRight } from "phosphor-react-native";
import { BtnArrow, Container, ContainerDescription, ContainerImage, Title } from "./styles";

interface IProps {
    title: string
    btnText: string
    urlImage: string
}

export function CardNews({ title, urlImage, btnText }: IProps) {
  
    return (
      <Container>
        <ContainerDescription>
            <Title>{title}</Title>
            <BtnArrow>
                {btnText} <CaretRight color="#F0F2F5" size={12} />
            </BtnArrow>
        </ContainerDescription>
        <ContainerImage src={urlImage} />
      </Container>
    )
  }