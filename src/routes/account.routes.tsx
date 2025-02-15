import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { AccountScreen } from 'screens/AccountScreen'
import { DonationScreen } from 'screens/DonationScreen'
import { HelpScreen } from 'screens/HelpScreen'

import { ProfileRouter } from './profile.routes'
import { AddressScreen } from 'screens/AddressScreen'
import { NotificationsScreen } from 'screens/NotificationsScreen'
import { SendReviewScreen } from 'screens/SendReviewScreen'

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export function AccountRouter() {
  return (
    <Stack.Navigator initialRouteName="ProfileInitial">
      <Stack.Screen
        name="ProfileInitial"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileRouter}
        options={{
          headerShown: false,
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
        name="Help"
        component={HelpScreen}
        options={{
          headerTitle: 'Ajuda',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
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
  )
}
