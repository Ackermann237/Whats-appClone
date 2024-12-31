import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import VectorIcon from '../utils/Vectoricon';
import { Colors } from '../theme/Colors';

const ContactHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
             <VectorIcon
        name="arrow-back"
        type="Ionicons"
        size={24}
        color={Colors.white}
        onPress={() => navigation.goBack()} // Correctement passé comme fonction
      />
      <View>
          <Text style={styles.selectContact}>Sélectionner un contact</Text>
      <Text style={styles.Count}>25 Contacts</Text>
        </View>
     
      </View>

      <View style={styles.headerContainer}>
        <VectorIcon 
          type="Ionicons"
          name ="search"
          color={Colors.white} 
          size={20} 
          style={styles.iconStyles}
        />
            <VectorIcon 
          type="Entypo"
          name ="dots-three-vertical"
          color={Colors.white} 
          size={20} 
         
        />
        </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
    container :{
        backgroundColor:Colors.primaryColor,
        paddingVertical:15,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    selectContact:{
        fontSize:17,
        color:Colors.white,
        marginLeft:20,
    },
    Count:{
        color: Colors.white,
        marginLeft:20,
        marginTop:2,
    },
    iconStyles:{
        marginHorizontal:25,
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default ContactHeader;
