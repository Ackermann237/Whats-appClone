import { View, Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Colors } from '../theme/Colors';

const ProgressBar = ({ setTimeUp }) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 10000, // Durée de l'animation en ms
      useNativeDriver: false, // Nécessaire pour les animations sur les propriétés non transformées
    }).start(({ finished }) => {
      if (finished) {
        setTimeUp(); // Appeler setTimeUp quand l'animation est terminée
      }
    });
  };

  useEffect(() => {
    animateProgress(); // Commencer l'animation dès que le composant est monté
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressBg}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'], // Anime la largeur de 0% à 100%
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBg: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: Colors.primaryColor, // Définissez la couleur de la barre de progression
    borderRadius: 5,
  },
  container: {
    marginTop: 10,
  },
});

export default ProgressBar;
