import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import whatsappLogo from '../assets/WhatsApp_logo.png';
import { Colors } from '../theme/Colors'; // Assurez-vous que Colors est correctement défini
import VectorIcon from '../utils/Vectoricon';
import TopTabbar from '../navigation/TopTabbar';


const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={whatsappLogo} style={styles.logoStyle} />
      <View style={styles.headerIcons}>
        <VectorIcon 
          type="Feather"
          name ="camera"
          color={Colors.secondaryColor} 
          size={20} 
        />
           <VectorIcon 
          type="Ionicons"
          name ="search"
          color={Colors.secondaryColor} 
          size={20} 
          style={styles.iconStyles}
        />
            <VectorIcon 
          type="Entypo"
          name ="dots-three-vertical"
          color={Colors.secondaryColor} 
          size={20} 
         
        />
        
      </View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor, 
    padding: 16,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  logoStyle: {
    height: 25,
    width: 110,
  },
  headerIcons: {
    flexDirection: 'row'
  },
  iconStyles : {
    marginHorizontal:26,
  }
});

export default Header