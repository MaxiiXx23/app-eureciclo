import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from '../screens/auth/login'
import { ChooseRegisterScreen } from 'screens/auth/ChooseRegisterScreen'
import { AuthStackParamList } from 'shared/routes/stacksParamsList'
import { RegisterClientScreen } from 'screens/RegisterClientScreen'
import { RegisterCollectorRouter } from './registerCollector.routes'
import { RegisterBusinessRouter } from './registerBusiness.routes'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthRouter() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">

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

      <Stack.Screen
        name="RegisterClientScreen"
        component={RegisterClientScreen}
        options={{
          headerTitle: 'Cadastro',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="RegisterCollector"
        component={RegisterCollectorRouter}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RegisterBusinessRouter"
        component={RegisterBusinessRouter}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}
