import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { CollectScreen } from 'screens/Collect'
import { RequestCollectScreen } from 'screens/RequestCollectScreen'
import { CameraScreen } from 'screens/CameraScreen'

const Stack = createNativeStackNavigator<CollectStackParamList>()

export function CollectRouter() {
  return (
    <Stack.Navigator initialRouteName="CollectInitial">
      <Stack.Screen
        name="CollectInitial"
        component={CollectScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Request"
        component={RequestCollectScreen}
        options={{
          headerTitle: 'Solicitar Coleta',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
