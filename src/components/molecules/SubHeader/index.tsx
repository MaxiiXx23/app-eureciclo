import { TitleSubHeader } from "components/atoms/TitleSubHeader"
import { Container, Description } from "./styles"

interface IProps {
    title: string
    description: string
}

export function SubHeader({ title, description }: IProps) {
    return (
        <Container>
            <TitleSubHeader label={title} />
            <Description>{description}</Description>
        </Container>
    )
}