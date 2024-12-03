import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRouter } from './home.routes';

import { House, Recycle } from 'phosphor-react-native';
import { CollectScreen } from 'screens/Collect';
import { CollectRouter } from './collect.routes';

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
    </Tab.Navigator>
  );
}