import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { ProfileScreen } from 'screens/ProfileScreen'

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export function ProfileRouter() {
  return (
    <Stack.Navigator initialRouteName="ProfileInitial">
      <Stack.Screen
        name="ProfileInitial"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}
