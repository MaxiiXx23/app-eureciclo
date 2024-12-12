import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, Receipt, Recycle, User } from 'phosphor-react-native';

import { CollectRouter } from './collect.routes';
import { HomeRouter } from './home.routes';
import { ActivitiesRouter } from './activities.routes';
import { AccountRouter } from './account.routes';

const Tab = createBottomTabNavigator();

export function BottomRouter() {
  return (
    <Tab.Navigator
        initialRouteName="Initial"
        screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#969CB2',
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