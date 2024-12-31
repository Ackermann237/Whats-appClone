import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import React from 'react';
import Chatlist from '../components/Chatlist';
import VectorIcon from '../utils/Vectoricon';
import { Colors } from '../theme/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const ChatListScreen = () => {
  const navigation = useNavigation();
  
  const onNavigate = () => {
   navigation.navigate('ContactScreen')
  }
  return (
    <View style={styles.container}>
   <ScrollView>
      <Chatlist/>
   </ScrollView>
         
     
   
      <TouchableOpacity style={styles.contactIcon} onPress={onNavigate}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="message-reply-text" // Correction du nom de l'icône
          color={Colors.white} // Couleur blanche pour l'icône
          size={28} // Taille légèrement augmentée pour s'adapter au cercle
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.background,
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 60,
    width: 60, // Assurez-vous que la largeur est égale à la hauteur
    borderRadius: 30, // La moitié de la hauteur pour obtenir un cercle parfait
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});

export default ChatListScreen;
