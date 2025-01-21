import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileConfigStackParamList } from 'shared/routes/stacksParamsList'
import { DonationScreen } from 'screens/DonationScreen'
import { HelpScreen } from 'screens/HelpScreen'
import { ProfileScreen } from 'screens/ProfileScreen'
import { NameConfigScreen } from 'screens/NameConfigScreen'
import { PhoneConfigScreen } from 'screens/PhoneConfigScreen'

const Stack = createNativeStackNavigator<ProfileConfigStackParamList>()

export function ProfileRouter() {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">

      <Stack.Screen
            name="ProfileScreen"
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
        name="Name"
        component={NameConfigScreen}
        options={{
            headerTitle: 'Nome',
            headerStyle: {
              backgroundColor: '#4ADE80',
            },
            headerTintColor: '#FFF'
          }}
      />

      <Stack.Screen
        name="Phone"
        component={PhoneConfigScreen}
        options={{
          headerTitle: 'Telefone',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="Email"
        component={DonationScreen}
        options={{
          headerTitle: 'E-mail',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />

      <Stack.Screen
        name="Description"
        component={HelpScreen}
        options={{
          headerTitle: 'Descrição',
          headerStyle: {
            backgroundColor: '#4ADE80',
          },
          headerTintColor: '#FFF'
        }}
      />
      

    </Stack.Navigator>
  )
}
