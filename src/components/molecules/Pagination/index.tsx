import { CaretLeft, CaretRight } from "phosphor-react-native";
import { ButtonNav, Container } from "./styles";

interface IProps {
    handlePageChange: (page: number, totalPage: number) => void
    currentPage: number
    totalPage: number
}

export function Pagination( { handlePageChange, currentPage, totalPage }: IProps) {
    return (
        <Container>
            <ButtonNav onPress={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1, totalPage)}>
                <CaretLeft size={32} color="#FFF" />
            </ButtonNav>

            <ButtonNav onPress={() => handlePageChange(currentPage === totalPage ? currentPage + 1 : currentPage, totalPage)}>
                <CaretRight size={32} color="#FFF" />
            </ButtonNav>
        </Container>
    )
}