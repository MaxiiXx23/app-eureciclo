import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AdminCompanyStackParamList } from 'shared/routes/stacksParamsList'
import { CollectsProvider } from 'contexts/CollectsContext'
import { AddressScreen } from 'screens/AddressScreen'
import { ProfileAdminCompanyScreen } from 'screens/ProfileAdminCompanyScreen'

const Stack = createNativeStackNavigator<AdminCompanyStackParamList>()

export function AdminCompanyRouter() {
  return (
    <CollectsProvider>
      <Stack.Navigator initialRouteName="AdminInitial">
          <Stack.Screen
            name="AdminInitial"
            component={ProfileAdminCompanyScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Address"
            component={AddressScreen}
            options={{
              headerTitle: 'Endereço',
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
