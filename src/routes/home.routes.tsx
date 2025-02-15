import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ChooseRegisterScreen } from 'screens/auth/ChooseRegisterScreen'
import { HomeStackParamList } from 'shared/routes/stacksParamsList'
import { HomeScreen } from 'screens/Home'
import { DonationScreen } from 'screens/DonationScreen'
import { NotificationsScreen } from 'screens/NotificationsScreen'
import { SendReviewScreen } from 'screens/SendReviewScreen'

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
    </Stack.Navigator>
  )
}
