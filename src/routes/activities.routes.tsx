import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ActivitiesStackParamList } from 'shared/routes/stacksParamsList'
import { ActivitiesScreen } from 'screens/ActivitiesScreen'
import { CollectsProvider } from 'contexts/CollectsContext'
import { VerifyCollectScreen } from 'screens/VerifyCollectScreen'
import { ConfirmCollectScreem } from 'screens/ConfirmCollectScreem'
import { DonationScreen } from 'screens/DonationScreen'

const Stack = createNativeStackNavigator<ActivitiesStackParamList>()

export function ActivitiesRouter() {
  return (
    <CollectsProvider>
      <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen
            name="Initial"
            component={ActivitiesScreen}
            options={{
              headerShown: false,
            }}
            initialParams={{
              isInProcess: false
            }}
          />

          <Stack.Screen
            name="Verify"
            component={VerifyCollectScreen}
            options={{
              headerTitle: 'Verificar Coleta',
              headerStyle: {
                backgroundColor: '#4ADE80',
              },
              headerTintColor: '#FFF'
            }}
          />

          <Stack.Screen
            name="ConfirmCollect"
            component={ConfirmCollectScreem}
            options={{
              headerTitle: 'Confirmar Coleta',
              headerStyle: {
                backgroundColor: '#4ADE80',
              },
              headerTintColor: '#FFF'
            }}
          />
          <Stack.Screen
            name="Donation"
            component={DonationScreen}
            options={{
              headerTitle: 'Doação',
              headerStyle: {
                backgroundColor: '#4ADE80',
              },
              headerTintColor: '#FFF'
            }}
          />

      </Stack.Navigator>
    </CollectsProvider>

  )
}
