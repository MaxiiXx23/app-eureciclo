import { ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { PencilSimpleLine } from 'phosphor-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Container, ContainerPreview, Preview} from './styles'
import { CollectStackParamList } from 'shared/routes/stacksParamsList';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  urlImage: string
  handleTriggerReload: () => void
}

export function SelectImageCollectPicker({ urlImage, handleTriggerReload}: IProps) {
  type NavProps = NativeStackNavigationProp<CollectStackParamList>

  const navigation = useNavigation<NavProps>()
  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }

  function handleNavBack() {
    navigation.navigate('Request')
  }

  // Função para abrir o seletor de imagens
  const handleOpenImagePicker = async () => {
    try {
      // Solicitar permissão
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        return showToast('Permissão necessária. Precisamos de acesso à galeria para continuar.')
      }
  
      // Abrir o seletor de imagens
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true, // Permite cortar a imagem
        quality: 1, // Qualidade máxima,
      });
  
      if (!result.canceled) {

        const uriPhotoJson = JSON.stringify(result.assets[0].uri,);
        await AsyncStorage.setItem('@EuReciclo:uri', uriPhotoJson);
        handleTriggerReload()

        return showToast('Imagem selecionada com sucesso!')
      }
    } catch (error) {
      return showToast('Erro ao atualizar imagem. Por favor, tente novamente!')
    }   
  };

  return (
    <Container>
        <ContainerPreview>
            <Preview src={urlImage} />
            <Button onPress={handleOpenImagePicker} >
                <PencilSimpleLine size={28} color='#4ADE80' />
            </Button>  
            
        </ContainerPreview>
    </Container>

  )
}
