import React from 'react';
import { StatusBar, Text, View } from 'react-native';  // Retirer l'importation de Colors depuis react-native
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './src/theme/Colors';  // Garder uniquement l'importation correcte de Colors
import Homescreen from './src/screens/Homescreen';  // Vous n'avez pas besoin de changer cette ligne
import Header from './src/components/Header';
import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor}/>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
    </Stack.Navigator>
    
   </NavigationContainer>
    
   
  );
};

export default App;
