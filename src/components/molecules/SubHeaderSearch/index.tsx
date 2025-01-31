import { TitleSubHeader } from "components/atoms/TitleSubHeader"
import { Container, Description } from "./styles"
import { InputSearch } from "components/atoms/InputSearch"

interface IProps {
    title: string
    description: string
    handleSearch(text: string): void
    label?: string
}

export function SubHeaderSearch({ title, label= 'Pesquise por bairro, rua ou cidade...', description, handleSearch }: IProps) {
    return (
        <Container>
            <TitleSubHeader label={title} />
            <Description>{description}</Description>
            <InputSearch 
                label={label}
                color="primary" 
                handleSearch={handleSearch}
            />
        </Container>
    )
}