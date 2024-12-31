import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Profile from '../assets/user11.jpg';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/Vectoricon';

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.profilestyle} />
      <View style={styles.Iconbg}>
        <VectorIcon
          name="pluscircle"
          type="AntDesign"
          size={20}
          color={Colors.tertiary}
         
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.myStatus}>MyStatus</Text>
        <Text style={styles.addStatus}>Clique pour ajouter un status</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.background, // Assurez-vous que cela ne soit défini qu'une seule fois
    alignItems: 'center', // Pour aligner les éléments au centre verticalement
  },
  profilestyle: {
    borderRadius: 50,
    height: 45,
    width: 45,
    position: 'relative',
  },
  myStatus: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  addStatus: {
    color: Colors.textGrey,
    fontSize: 13,
  },
  statusContainer: {
    marginLeft: 15,
  },
  Iconbg: {
    backgroundColor: Colors.white,
    width: 20,
    height: 20,
    borderRadius:50,
    position:'absolute',
    bottom:0,
    left: 20,

  },
});

export default MyStatus;
