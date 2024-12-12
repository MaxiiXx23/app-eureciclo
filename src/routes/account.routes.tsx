import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { AccountScreen } from 'screens/AccountScreen'
import { DonationScreen } from 'screens/DonationScreen'
import { HelpScreen } from 'screens/HelpScreen'
import { ProfileScreen } from 'screens/ProfileScreen'

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
        component={ProfileScreen}
        options={{
          headerTitle: 'Perfil',
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
      

    </Stack.Navigator>
  )
}
