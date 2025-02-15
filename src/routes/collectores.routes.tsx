import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UsersProvider } from 'contexts/UsersContext'
import { DonationScreen } from 'screens/DonationScreen'

import { InfoProfileUserScreen } from 'screens/InfoProfileUserScreen'
import { NotificationsScreen } from 'screens/NotificationsScreen'
import { SearchCollectoresScreen } from 'screens/SearchCollectoresScreen'
import { SendReviewScreen } from 'screens/SendReviewScreen'

import { CollectoresStackParamList } from 'shared/routes/stacksParamsList'


const Stack = createNativeStackNavigator<CollectoresStackParamList>()

export function CollectoresRouter() {

  return (
    <UsersProvider>
      <Stack.Navigator initialRouteName="CollectoresInitial">
        
        <Stack.Screen
          name="CollectoresInitial"
          component={SearchCollectoresScreen}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="InfoProfileUser"
          component={InfoProfileUserScreen}
          options={{
            headerTitle: 'Perfil Coletor',
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
    </UsersProvider>
  )
}
