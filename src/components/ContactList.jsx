import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Profile from "../assets/user14.jpg"
import { Colors } from '../theme/Colors'
import { ContactListData } from '../data/ConctactListData'
const ContactList = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contacts sur WhatsApp</Text>
        {ContactListData.map((item, index) => (
          <View key={index} style={styles.contactContainer}>
            <Image source={item.UserImg} style={styles.imgStyle} />
            <Text style={styles.username}>{item.name}</Text>
          </View>
        ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      padding: 16,
    },
    imgStyle: {
      height: 40,
      width: 40,
      borderRadius: 50,
      marginRight: 10, // Ajout d'un espace entre l'image et le texte
    },
    username: {
      fontSize: 16,
      color: Colors.textColor,
    },
    title: {
      fontSize: 16,
      color: Colors.textGrey,
      marginTop: 5,
      marginBottom: 10, // Ajout d'un espace entre le titre et la liste
    },
    contactContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
    },
  });
  

export default ContactList