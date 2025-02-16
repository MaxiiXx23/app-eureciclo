import { FlatList } from "react-native";
import { Container, Title } from "./styles";

import { CardNews } from "components/molecules/CardNews";
import { IResponseGetListPosts } from "dtos/post";
import { InfoEmpty } from "components/molecules/InfoEmpty";

interface IProps {
    data: IResponseGetListPosts | undefined 
    title: string
    handleNav(id: number): void
}

export function ListCardsHorizontal({ title, handleNav, data }: IProps) {
    return (
        <Container>
            <Title>{title}</Title>
            {!data ? (
                    <InfoEmpty description={`Lista de ${title} está vázia!`} />
            ): (
                <FlatList 
                data={data.posts} 
                renderItem={({item}) => 
                    <CardNews 
                        id={item.id}
                        title={item.title} 
                        btnText="Saiba mais" 
                        handleNav={handleNav}
                        urlImage={item.urlImage} 
                    />}
                keyExtractor={item => item.id.toString()} 
                horizontal
            />
            )}
        </Container>
    )
}