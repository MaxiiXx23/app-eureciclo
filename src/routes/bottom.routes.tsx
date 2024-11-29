import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRouter } from './home.routes';

import { House } from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

export function BottomRouter() {
  return (
    <Tab.Navigator
        initialRouteName="Initial"
        screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#969CB2',
            tabBarActiveBackgroundColor: '#4ADE80',
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
    </Tab.Navigator>
  );
}