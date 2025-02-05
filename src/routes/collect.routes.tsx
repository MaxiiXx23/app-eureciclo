import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CollectsProvider } from 'contexts/CollectsContext'

import { CollectScreen } from 'screens/Collect'
import { RequestCollectScreen } from 'screens/RequestCollectScreen'
import { CameraScreen } from 'screens/CameraScreen'
import { VerifyCollectScreen } from 'screens/VerifyCollectScreen'
import { AddressScreen } from 'screens/AddressScreen'

import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { SearchCollectsScreen } from 'screens/SearchCollectsScreen'
import { ActivitiesScreen } from 'screens/ActivitiesScreen'
import { SearchCompanies } from 'screens/SearchCompanies'
import { ProfileCompanyScreen } from 'screens/ProfileCompanyScreen'
import { ConfirmCollectScreem } from 'screens/ConfirmCollectScreem'
import { DonationScreen } from 'screens/DonationScreen'

const Stack = createNativeStackNavigator<CollectStackParamList>()

export function CollectRouter() {

  return (
    <CollectsProvider>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={CollectScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Request"
          component={RequestCollectScreen}
          options={{
            headerTitle: 'Solicitar Coleta',
            headerStyle: {
              backgroundColor: '#4ADE80',
            },
            headerTintColor: '#FFF'
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

      <Stack.Screen
          name="VerifyCollectsInProcess"
          component={ActivitiesScreen}
          options={{
            headerTitle: 'Solitações em Andamento',
            headerStyle: {
              backgroundColor: '#4ADE80',
            },
            headerTintColor: '#FFF'
          }}
        />


        <Stack.Screen
          name="SearchCollects"
          component={SearchCollectsScreen}
          options={{
            headerTitle: 'Solicitações',
            headerStyle: {
              backgroundColor: '#4ADE80',
            },
            headerTintColor: '#FFF'
          }}
        />

        <Stack.Screen
          name="SearchCompanies"
          component={SearchCompanies}
          options={{
            headerTitle: 'Empresas',
            headerStyle: {
              backgroundColor: '#4ADE80',
            },
            headerTintColor: '#FFF'
          }}
        />

        <Stack.Screen
          name="ProfileInfoCompany"
          component={ProfileCompanyScreen}
          options={{
            headerTitle: 'Empresa',
            headerStyle: {
              backgroundColor: '#4ADE80',
            },
            headerTintColor: '#FFF'
          }}
        />

        <Stack.Screen
          name="Camera"
          component={CameraScreen}
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
          name="ConfirmCollect"
          component={ConfirmCollectScreem}
          options={{
            headerTitle: 'Confirmar Coleta',
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
