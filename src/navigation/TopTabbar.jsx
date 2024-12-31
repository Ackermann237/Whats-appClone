import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/Vectoricon';
import { TabBarData } from '../data/TabbarData';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <Tab.Navigator
    initialRouteName='Chat'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primaryColor, // Couleur de fond de la tab bar
        },
        tabBarActiveTintColor: Colors.tertiary, // Couleur de l'icône ou texte actif
        tabBarInactiveTintColor: Colors.secondaryColor, // Couleur de l'icône ou texte inactif
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary, // Couleur de l'indicateur sous l'onglet actif
        },
      }}
    >
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false, // Masque le libellé de l'onglet
          tabBarIcon: ({ color }) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              color={color} // Utilisation de la couleur fournie par le style
              size={20}
            />
          ),
        }}
      />
      {TabBarData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.name} // Nom unique pour chaque onglet
          component={tab.route}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabbar;
