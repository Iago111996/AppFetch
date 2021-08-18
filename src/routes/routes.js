import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Action from '../pages/Action';
import Analytics from '../pages/Analytics';
import CountLead from '../pages/CountLead';
import Sale from '../pages/Sale';
import Avatar from '../pages/Avatar';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName={CountLead}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Inicio"
        component={CountLead}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={Action}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="trello" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="database" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Vendas"
        component={Sale}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Avatar}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="meh" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
