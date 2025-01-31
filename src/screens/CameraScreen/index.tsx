import { ContainerMain } from 'components/templates/Container/styles'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Camera } from 'components/organisms/Camera'

export function CameraScreen() {
  
  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Camera />
      </ContainerMain>
    </SafeAreaProvider>

  )
}
