import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ActivitiesStackParamList } from 'shared/routes/stacksParamsList'
import { ActivitiesScreen } from 'screens/ActivitiesScreen'

const Stack = createNativeStackNavigator<ActivitiesStackParamList>()

export function ActivitiesRouter() {
  return (
    <Stack.Navigator initialRouteName="ActivitiesInitial">
      <Stack.Screen
        name="ActivitiesInitial"
        component={ActivitiesScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}
