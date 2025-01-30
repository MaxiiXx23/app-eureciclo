import { useCallback, useEffect, useState } from 'react'

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Camera } from 'phosphor-react-native'

import { Button, Container, ContainerPreview, Preview} from './styles'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { services } from 'config/services'
import { Image, StyleSheet } from 'react-native'

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function BtnOpenCamera() {
  const navigation = useNavigation<NavProps>()
  const [url, setURL] = useState('')
  const [uri, setURI] = useState('')
  

  function handleNavToCamera() {
    navigation.navigate('Camera')
  }

  async function getURI() {
    const jsonValue = await AsyncStorage.getItem('@EuReciclo:uri');

    if(jsonValue === null) {
      return setURL(`${services.baseUrl}/imagens/icon-image.jpg`)
    }

    const uriReplaced = jsonValue.replace('"', '').replace('"', '')
    setURI(uriReplaced)
  }

  useFocusEffect(
    useCallback(() => {
      // Simula uma requisição ou atualização de estado
      getURI()
    }, [])
    
  )

  return (
    <Container>
        <ContainerPreview>
            {uri ? (
              <Image source={{ uri }} style={styles.previewImage}  />
            ) : (
              <Image src={url} style={styles.previewImage}  />
            )}
            <Button onPress={handleNavToCamera} >
                <Camera size={32} color='#4ADE80' />
            </Button>  
            
        </ContainerPreview>
    </Container>

  )
}

const styles = StyleSheet.create({
 
  previewImage: {
    borderRadius: 80,
    width: 240,
    height: 192,
  },
});