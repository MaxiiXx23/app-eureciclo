import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RegisterCollectorStackParamList } from 'shared/routes/stacksParamsList'
import { RegisterCollectorScreen } from 'screens/RegisterCollectorScren'
import { ConfirmPlantCollectorScreen } from 'screens/ConfirmPlantCollectorScreen'

const Stack = createNativeStackNavigator<RegisterCollectorStackParamList>()

export function RegisterCollectorRouter() {
  return (
    <Stack.Navigator initialRouteName="RegisterCollectorInitial">

      <Stack.Screen
        name="RegisterCollectorInitial"
        component={RegisterCollectorScreen}
        options={{
          headerTitle: 'Cadastro',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="RegisterCollectiorInfo"
        component={ConfirmPlantCollectorScreen}
        options={{
          headerTitle: 'Plano',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

    </Stack.Navigator>
  )
}
