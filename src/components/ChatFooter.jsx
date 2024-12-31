import { View, Text, TextInput, StyleSheet,Alert } from 'react-native';
import React, { useState } from 'react';
import VectorIcon from '../utils/Vectoricon';
import { Colors } from '../theme/Colors';

const ChatFooter = () => {

    const [message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false);
  
    const onChange = (value) => {
      setMessage(value);
      setSendEnable(value.trim().length > 0); // Active si le message n'est pas vide
    };
    const onSend = () => {
        if (message.trim().length > 0) {
            Alert.alert("Message envoyé", message); // Affiche le message envoyé
            setMessage(''); // Réinitialise le champ de texte
            setSendEnable(false); // Désactive le bouton d'envoi
        } else {
            Alert.alert("Erreur", "Le message est vide."); // Alerte si le champ est vide
        }
    };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
             <VectorIcon
        name="emoji-emotions"
        type="MaterialIcons"
        size={20}
        color={Colors.white}
      />
      <TextInput
        placeholder="Message"
        onChangeText={value => onChange(value)}
        style = {styles.inputStyle}
        value={message}
        placeholderTextColor={Colors.textGrey}/>
        </View>
        <View style={styles.row}>
     
   
      <VectorIcon
        type="Entypo"
        name="attachment"
        size={18}
        color={Colors.white}
      />
     {!sendEnable && (
            <>
            <VectorIcon
            type="Fontisto"
            name="share-a"
            size={20}
            color={Colors.white}
            style={styles.iconStyle}
          />
              <VectorIcon
                type="FontAwesome"
                name="camera"
                size={18}
                color={Colors.white}
              />
            </>
          )}
      </View>
      </View>
      <View style={styles.rightContainer}>
        {sendEnable ? (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="send"
            size={25}
            color={Colors.white}
            onPress={onSend} // Placeholder pour le bouton envoyer
          />
        ) : (
          <VectorIcon
            type="MaterialCommunityIcons"
            name="microphone"
            size={25}
            color={Colors.white}
          />
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.black,
      paddingVertical: 12,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftContainer: {
      width: '85%',
      flexDirection: 'row',
      backgroundColor: Colors.primaryColor,
      borderRadius: 30,
      paddingHorizontal: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconStyle: {
      marginHorizontal: 25,
    },
    rightContainer: {
      backgroundColor: Colors.teal,
      padding: 10,
      borderRadius: 50,
    },
    inputStyle: {
      fontSize: 17,
      color: Colors.white,
      marginLeft: 5,
    },
  });

export default ChatFooter;
