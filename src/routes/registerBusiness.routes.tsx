import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'

import { RegisterBusinessScreen } from 'screens/RegisterBusinessScreen'
import { ConfirmPlanBusinessScreen } from 'screens/ConfirmPlanBusinessScreen'
import { RegisterUserBusinessScreen } from 'screens/RegisterUserBusinessScreen'

const Stack = createNativeStackNavigator<RegisterBusinessStackParamList>()

export function RegisterBusinessRouter() {
  return (
    <Stack.Navigator initialRouteName="RegisterBusinessInitial">

      <Stack.Screen
        name="RegisterBusinessInitial"
        component={RegisterUserBusinessScreen}
        options={{
          headerTitle: 'Cadastro - Usuário',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="RegisterBusiness"
        component={RegisterBusinessScreen}
        options={{
          headerTitle: 'Cadastro - Empresa',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="RegisterPlanBusinessInfo"
        component={ConfirmPlanBusinessScreen}
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
