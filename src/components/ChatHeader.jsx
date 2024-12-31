import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Profile from '../assets/user19.jpg';
import VectorIcon from '../utils/Vectoricon';
import { Colors } from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {
  const navigation = useNavigation();  // Utilisation de useNavigation pour la navigation

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <VectorIcon
          name="arrow-back"
          type="Ionicons"
          size={24}
          color={Colors.white}
          style={styles.back}
          onPress={() => navigation.goBack()}  // Utilisation de goBack() ici
        />
        <Image source={Profile} style={styles.profilePhoto} />
        <Text style={styles.username}>Vanessa</Text>
      </View>
      <View style={styles.actionContainer}>
        <VectorIcon
          name="videocam"
          type="Ionicons"
          size={24}
          color={Colors.white}
        />
        <VectorIcon
          name="phone-alt"
          type="FontAwesome5"
          size={18}
          color={Colors.white}
          style={styles.iconStyle}
        />
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          size={18}
          color={Colors.white}
          style={styles.iconStyles}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  back: {
    paddingRight: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',  // Pour centrer verticalement les éléments
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',  // Pour centrer verticalement les actions
  },
  iconStyle: {
    marginLeft: 20,  // Espacement entre les icônes
  },
  iconStyles:{
    marginLeft: 20,
  }
});

export default ChatHeader;
