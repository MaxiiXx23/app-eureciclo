import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ChooseRegisterScreen } from 'screens/auth/ChooseRegisterScreen'
import { HomeStackParamList } from 'shared/routes/stacksParamsList'
import { HomeScreen } from 'screens/Home'

const Stack = createNativeStackNavigator<HomeStackParamList>()

export function HomeRouter() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Collect"
        component={ChooseRegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
