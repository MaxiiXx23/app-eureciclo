import { TitleSubHeader } from "components/atoms/TitleSubHeader"
import { Container, Description } from "./styles"
import { InputSearch } from "components/atoms/InputSearch"

interface IProps {
    title: string
    description: string
    handleSearch(text: string): void
}

export function SubHeaderSearch({ title, description, handleSearch }: IProps) {
    return (
        <Container>
            <TitleSubHeader label={title} />
            <Description>{description}</Description>
            <InputSearch 
                label="Pesquise por bairro, rua ou cidade..." 
                color="primary" 
                handleSearch={handleSearch}
            />
        </Container>
    )
}