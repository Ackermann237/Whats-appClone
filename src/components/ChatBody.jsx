import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/Vectoricon';
import { MesageData } from '../data/MessageData';

const ChatBody = () => {
  const scrollviewRef = useRef();

  const UserMessageView = ({ message, time }) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={12}
            style={styles.doublecheck}
          />
        </View>
      </View>
    );
  };

  const OtherUserMessageView = ({ message, time }) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    );
  };

  const scrollToBottom = () => {
    scrollviewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollviewRef}
        onContentSizeChange={scrollToBottom} // Appel correct de la fonction
      >
        {MesageData.map((item, index) => (
          index % 2 === 0 ? (
            <UserMessageView key={item.id} message={item.message} time={item.time} />
          ) : (
            <OtherUserMessageView key={item.id} message={item.message} time={item.time} />
          )
        ))}
      </ScrollView>

      {/* Icône de défilement avec gestionnaire onPress */}
      <TouchableOpacity onPress={scrollToBottom}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name="angle-double-down" // Correction du nom de l'icône
            type="FontAwesome5" // Assurez-vous que "FontAwesome5" est bien configuré dans votre projet
            size={12}
            color={Colors.white}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 13,
    color: Colors.white, // Applique correctement la couleur blanche au texte
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5,
  },
  doublecheck: {
    marginLeft: 10,
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    position: 'absolute', // Positionner l'icône en bas de l'écran
    bottom: 20, // Espacement du bas de l'écran
    right: 20, // Espacement du côté droit
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
});

export default ChatBody;
