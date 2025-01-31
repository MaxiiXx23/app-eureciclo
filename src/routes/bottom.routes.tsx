import { useContext } from 'react';

import { AuthContext } from 'contexts/AuthContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Buildings, House, Receipt, Recycle, User, UsersThree } from 'phosphor-react-native';

import { CollectRouter } from './collect.routes';
import { HomeRouter } from './home.routes';
import { ActivitiesRouter } from './activities.routes';
import { AccountRouter } from './account.routes';
import { CollectoresRouter } from './collectores.routes';
import { AdminCompanyRouter } from './adminCompany.routes';

const Tab = createBottomTabNavigator();

export function BottomRouter() {
  const { userAuth } = useContext(AuthContext)
  return (
    <Tab.Navigator
        initialRouteName="Initial"
        screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#499999',
            tabBarStyle: {
              backgroundColor: '#4ADE80'
            },
            tabBarLabelStyle: {
                fontSize: 16
            },
        }}
    >
      <Tab.Screen         
        name="Initial"
        component={HomeRouter} 
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          // tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <House color={color} size={size} />
          ),
        }}
        />

        {
          userAuth.typeUserId !== 4 && (
            <>
              <Tab.Screen         
                name="Collect"
                component={CollectRouter} 
                options={{
                  headerShown: false,
                  tabBarLabel: 'Coleta',
                  // tabBarBadge: 3,
                  tabBarIcon: ({ color, size }) => (
                    <Recycle color={color} size={size} />
                  ),
                }}
              />

              <Tab.Screen         
                name="Activities"
                component={ActivitiesRouter} 
                options={{
                  headerShown: false,
                  tabBarLabel: 'Atividades',
                  // tabBarBadge: 3,
                  tabBarIcon: ({ color, size }) => (
                    <Receipt color={color} size={size} />
                  ),
                }}
              />
            </>
          )
        }

        {
          userAuth.typeUserId === 4 && (
            <>
              <Tab.Screen         
                name="SearchCollectores"
                component={CollectoresRouter} 
                options={{
                  headerShown: false,
                  tabBarLabel: 'Coletores',
                  // tabBarBadge: 3,
                  tabBarIcon: ({ color, size }) => (
                    <UsersThree color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen         
                name="AdminCompany"
                component={AdminCompanyRouter} 
                options={{
                  headerShown: false,
                  tabBarLabel: 'Empresa',
                  // tabBarBadge: 3,
                  tabBarIcon: ({ color, size }) => (
                    <Buildings color={color} size={size} />
                  ),
                }}
              />
            </>
          )
        }

        <Tab.Screen         
          name="Account"
          component={AccountRouter} 
          options={{
            headerShown: false,
            tabBarLabel: 'Conta',
            // tabBarBadge: 3,
            tabBarIcon: ({ color, size }) => (
              <User color={color} size={size} />
            ),
          }}
        />

    </Tab.Navigator>
  );
}