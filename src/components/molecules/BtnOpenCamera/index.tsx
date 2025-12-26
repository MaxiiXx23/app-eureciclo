import { useCallback, useEffect, useState } from 'react'

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Camera } from 'phosphor-react-native'

import { Button, Container, ContainerPreview, Preview} from './styles'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { services } from 'config/services'
import { Image, StyleSheet, Text } from 'react-native'
import { SelectImageCollectPicker } from '../SelectImageCollectPicker';

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function BtnOpenCamera() {
  const navigation = useNavigation<NavProps>()
  const [url, setURL] = useState('')
  const [triggerReload, setTriggerReload] = useState(false)
  

  function handleNavToCamera() {
    navigation.navigate('Camera')
  }

  function handleTriggerReload() {
    setTriggerReload((prev) => !prev)
  }

  async function getURI() {
    const jsonValue = await AsyncStorage.getItem('@EuReciclo:uri');

    if(jsonValue === null) {
      return setURL(`${services.baseUrl}/imagens/icon-image.jpeg`)
    }

    const uriReplaced = jsonValue.replace('"', '').replace('"', '')
    setURL(uriReplaced)
  }

  useEffect(() => {
    getURI()
  }, [triggerReload])

  return (
    <Container>
        <ContainerPreview>
            <SelectImageCollectPicker urlImage={url}  handleTriggerReload={handleTriggerReload} />
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