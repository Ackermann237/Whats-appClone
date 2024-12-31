import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/Vectoricon';
import { ChatListData } from '../data/ChatListData';
import { useNavigation } from '@react-navigation/native';  // Assure-toi d'utiliser ce hook

const Chatlist = () => {
    const navigation = useNavigation();  // Initialisation du hook pour la navigation

    const onNavigate = () => {
        navigation.navigate('ChatScreen');  // Navigue vers l'écran 'Chat'
    };

    return (
        <View>
            {ChatListData.map((item) => (
                <TouchableOpacity onPress={onNavigate} key={item.id} style={styles.container}>
                    {/* Image du profil */}
                    {item.profile && (
                        <Image source={item.profile} style={styles.profileImg} />
                    )}

                    {/* Détails à gauche */}
                    <View style={styles.leftDetails}>
                        <Text style={styles.username}>{item.name}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                    </View>

                    {/* Détails à droite */}
                    <View style={styles.rightDetails}>
                        <Text style={styles.timeStamp}>{item.time}</Text>
                        {item.mute && (
                            <VectorIcon
                                type="MaterialCommunityIcons"
                                name="volume-variant-off"
                                size={22}
                                color={Colors.textGrey}
                                style={styles.muteIcon}
                            />
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 20, // Pour rendre l'image circulaire.
        height: 40,
        width: 40,
        marginRight: 15,
    },
    container: {
        backgroundColor: Colors.background,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderGrey, // Ajouter une séparation entre les éléments.
    },
    leftDetails: {
        flex: 1,
        marginLeft: 10,
    },
    username: {
        color: Colors.textColor,
        fontSize: 14,
        fontWeight: 'bold',
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 3,
    },
    rightDetails: {
        alignItems: 'flex-end',
    },
    timeStamp: {
        color: Colors.textGrey,
        fontSize: 12,
    },
    muteIcon: {
        marginTop: 5,
    },
});

export default Chatlist;
