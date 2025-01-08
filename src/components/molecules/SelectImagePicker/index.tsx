import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { Button, Container, ContainerPreview, Preview} from './styles'

import { PencilSimpleLine } from 'phosphor-react-native'

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function SelectImagePicker() {
  const navigation = useNavigation<NavProps>()

  function handleOpenImagePicker() {
    console.log("Image-Picker selecionado")
  }

  return (
    <Container>
        <ContainerPreview>
            <Preview src="https://picsum.photos/200/300" />
            <Button onPress={handleOpenImagePicker} >
                <PencilSimpleLine size={28} color='#4ADE80' />
            </Button>  
            
        </ContainerPreview>
    </Container>

  )
}
