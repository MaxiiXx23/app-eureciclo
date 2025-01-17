import { Camera } from 'phosphor-react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, Container, ContainerPreview, Preview} from './styles'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function BtnOpenCamera() {
  const navigation = useNavigation<NavProps>()

  function handleNavToCamera() {
    navigation.navigate('Camera')
  }

  return (
    <Container>
        <ContainerPreview>
            <Preview source={require('../../../assets/images/icon-image.jpg')} />
            <Button onPress={handleNavToCamera} >
                <Camera size={32} color='#4ADE80' />
            </Button>  
            
        </ContainerPreview>
    </Container>

  )
}
