import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CommunityImg from '../assets/community-img.png'; // Correction de l'importation de l'image
import { Colors } from '../theme/Colors';
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/web/interfaces';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.communityImg} source={CommunityImg} />
      <Text style={styles.community}>AMOUGOU'S COMMUNITY</Text>
      <Text style={styles.subText}>
        Vous pouvez discuter avec vos contacts en inbox, créer des groupes ou échanger en communauté.
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTitle}>Start Your Community</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background, // Couleur noire pour le fond
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityImg: {
    height: 150,
    width: 250,
  },
  community: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Texte en blanc pour contraster avec le fond noir
    marginTop: 10,
  },
  subText: {
    color: 'grey', // Gris clair pour un bon contraste sur le fond noir
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 5,
    lineHeight: 22,
    letterSpacing: 0.6,
  },
  buttonStyle:{
    backgroundColor: Colors.tertiary,
    marginTop:30,
    padding:8,
    borderRadius:30,
    width: 'auto'
  },
  buttonTitle:{
    textAlign: 'center',
    fontSize: 14,
    color: Colors.background,
  }
});

export default CommunityScreen;
