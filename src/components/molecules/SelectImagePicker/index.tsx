import { useContext } from 'react'

import { ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from 'contexts/AuthContext'
import { UsersAPIs } from 'apis/users';

import { PencilSimpleLine } from 'phosphor-react-native'

import { Button, Container, ContainerPreview, Preview} from './styles'
import { CompaniesAPIs } from 'apis/companies';

interface IProps {
  urlImage: string
  isUser: boolean
  companyId?: number
  updateImageFromState?: (url: string) => void
}

export function SelectImagePicker({ urlImage, isUser, companyId, updateImageFromState }: IProps) {

  const { setUserAuth, userAuth } = useContext(AuthContext)

  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
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
        const formData = new FormData();
        formData.append('file', {
          uri: result.assets[0].uri,
          type: 'image/jpeg', // Tipo do arquivo
          name: 'profile.jpg', // Nome do arquivo
        });

        if(isUser === false && companyId) {
          const { data } = await CompaniesAPIs.uploadImageProfileCompany({
            id: companyId,
            form: formData,
          })
          updateImageFromState!(data.urlImage)

        } else {

          const { data } = await UsersAPIs.uploadImageProfileUser(formData)
        
          setUserAuth({
            ...userAuth,
            urlImageProfile: data.urlImage
          })
        }

        return showToast('Foto de perfil atualizada com sucesso.')
      }
    } catch (error) {
      return showToast('Erro ao atualizar foto de perfil. Por favor, tente novamente!')
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
