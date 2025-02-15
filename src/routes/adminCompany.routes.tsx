import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AdminCompanyStackParamList } from 'shared/routes/stacksParamsList'
import { CollectsProvider } from 'contexts/CollectsContext'
import { AddressScreen } from 'screens/AddressScreen'
import { ProfileAdminCompanyScreen } from 'screens/ProfileAdminCompanyScreen'
import { DonationScreen } from 'screens/DonationScreen'
import { NotificationsScreen } from 'screens/NotificationsScreen'
import { SendReviewScreen } from 'screens/SendReviewScreen'

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

          <Stack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
            headerTitle: 'Notificações',
              headerStyle: {
                backgroundColor: '#4ADE80',
                },
              headerTintColor: '#FFF'
            }}
          />

          <Stack.Screen
            name="SendReview"
            component={SendReviewScreen}
            options={{
              headerTitle: 'Avaliação',
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
