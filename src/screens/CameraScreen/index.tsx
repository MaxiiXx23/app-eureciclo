import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { Content } from './styles'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Camera } from 'components/organisms/Camera'

type NavProps = NativeStackNavigationProp<CollectStackParamList>

export function CameraScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  function handleNavToCamera() {
    navigation.navigate('Camera')
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Camera />
      </ContainerMain>
    </SafeAreaProvider>

  )
}
