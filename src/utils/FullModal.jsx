import { View, StyleSheet, Modal, Image, Text } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';
import VectorIcon from './Vectoricon';
import ProgressBar from './ProgressBar';

const FullModal = (props) => {
  const { showStatusModal, setShowStatusModal, item, setTimeUp } = props;

  // Ferme le modal en mettant à jour son état
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({ ...prev, [item.id]: false }));
  };

  return (
    <Modal
      animationType="fade"
      visible={showStatusModal}
      onRequestClose={updateModalStatus}
      
    >

      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp}/>
        <View style={styles.topContainer}>
          <View style={styles.profileSection}>
            {/* Icône de retour */}
            <VectorIcon
              name="arrow-back"
              type="Ionicons"
              size={24}
              color={Colors.white}
              onPress={updateModalStatus}
            />
            <Image source={item.userImg} style={styles.profileImg} />
            <Text style={styles.username}>{item.name}</Text>
          </View>
          <VectorIcon
            type="Entypo"
            name="dots-three-vertical"
            color={Colors.white}
            size={18}
          />
        </View>

        {/* Image de l'art ou du statut */}
        <Image source={item.storyImg} style={styles.storyImg} />
        <Text style={styles.storyMsg}>{item.storyMsg}</Text>

        {/* Section de réponse */}
        <View style={styles.replySection}>
          <VectorIcon
            type="Entypo"
            name="chevron-small-up"
            color={Colors.white}
            size={24}
            onPress={updateModalStatus}
          />
          <Text style={styles.reply}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    height: '100%',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  storyImg: {
    height: '75%',
    width: '100%',
  },
  storyMsg: {
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  replySection: {
    alignItems: 'center',
  },
  reply: {
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default FullModal;
