import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'

import { RegisterBusinessScreen } from 'screens/RegisterBusinessScreen'
import { ConfirmPlanBusinessScreen } from 'screens/ConfirmPlanBusinessScreen'
import { CheckoutPaymentScreen } from 'screens/CheckoutPaymentScreen'

const Stack = createNativeStackNavigator<RegisterBusinessStackParamList>()

export function RegisterBusinessRouter() {
  return (
    <Stack.Navigator initialRouteName="RegisterBusinessInitial">

      <Stack.Screen
        name="RegisterBusinessInitial"
        component={RegisterBusinessScreen}
        options={{
          headerTitle: 'Cadastro',
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

      <Stack.Screen
        name="CheckoutPayment"
        component={CheckoutPaymentScreen}
        options={{
          headerTitle: 'Pagamento',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

    </Stack.Navigator>

    
  )
}
