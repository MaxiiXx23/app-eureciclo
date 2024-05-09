import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from '../screens/auth/login'
import { ChooseRegisterScreen } from 'screens/auth/ChooseRegisterScreen'
import { AuthStackParamList } from 'shared/routes/stacksParamsList'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthRouter() {
  return (
    <Stack.Navigator initialRouteName="ChooseRegisterScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseRegisterScreen"
        component={ChooseRegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
