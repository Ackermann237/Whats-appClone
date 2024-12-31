import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../theme/Colors';
import RecentStatusData from '../data/RecentStatusData';
import FullModal from '../utils/FullModal';

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const openModal = (status) => {
    setSelectedStatus(status); // Statut sélectionné
    setShowStatusModal(true);
  };

  const closeModal = () => {
    setShowStatusModal(false);
  };
  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };
  return (
    <View>
      <Text style={styles.recentUpdate}>Recent Status</Text>
      {RecentStatusData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => openModal(item)}>
          <View style={styles.storySection}>
            <View style={styles.imgStory}>
              <Image source={item.storyImg} style={styles.statusStyle} />
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.username}>{item.name || 'Unknown User'}</Text>
              <Text style={styles.time}>{item.time || 'Unknown Time'}</Text>
            </View>
          </View>
        </TouchableOpacity >
      ))}
      {selectedStatus && (
        <FullModal
          showStatusModal={showStatusModal}
          setShowStatusModal={setShowStatusModal}
          item={selectedStatus}
          setTimeUp={setTimeUp}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  recentUpdate: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.tertiary,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3,
  },
  storySection: {
    flexDirection: 'row',
    marginTop: 15,
  },
  statusInfo: {
    marginLeft: 15,
  },
});

export default RecentStatus;
