import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ActivitiesStackParamList } from 'shared/routes/stacksParamsList'
import { ActivitiesScreen } from 'screens/ActivitiesScreen'
import { CollectsProvider } from 'contexts/CollectsContext'
import { VerifyCollectScreen } from 'screens/VerifyCollectScreen'

const Stack = createNativeStackNavigator<ActivitiesStackParamList>()

export function ActivitiesRouter() {
  return (
    <CollectsProvider>
      <Stack.Navigator initialRouteName="ActivitiesInitial">
          <Stack.Screen
            name="ActivitiesInitial"
            component={ActivitiesScreen}
            options={{
              headerShown: false,
            }}
            initialParams={{
              isInProcess: false
            }}
          />

          <Stack.Screen
            name="Verify"
            component={VerifyCollectScreen}
            options={{
              headerTitle: 'Verificar Coleta',
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
