import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UsersProvider } from 'contexts/UsersContext'

import { InfoProfileUserScreen } from 'screens/InfoProfileUserScreen'
import { SearchCollectoresScreen } from 'screens/SearchCollectoresScreen'

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

      </Stack.Navigator>
    </UsersProvider>
  )
}
