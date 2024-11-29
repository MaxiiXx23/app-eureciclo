import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import { INewsDTO } from "interfaces";
import { CardNews } from "components/molecules/CardNews";

interface IProps {
    data: INewsDTO[]
    title: string
}

export function ListCardsHorizontal({ title, data }: IProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <FlatList 
                data={data} 
                renderItem={({item}) => 
                    <CardNews 
                        title={item.title} 
                        btnText={item.btnText} 
                        urlImage={item.urlImage} 
                    />}
                keyExtractor={item => item.id.toString()} 
                horizontal
            />
        </Container>
    )
}