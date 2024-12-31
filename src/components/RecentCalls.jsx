import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';
import User1 from "../assets/user12.jpg";
import VectorIcon from '../utils/Vectoricon';
import { RecentCallData } from '../data/RecentCallData';

const RecentCalls = () => {
  return (
    <>
      <Text style={styles.recent}>Recent</Text>
      {RecentCallData.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.row}>
            {item.profileImg && (
              <Image source={item.profileImg} style={styles.imgSty} />
            )}
            <View style={styles.linkSection}>
              <Text style={styles.callLink}>{item.name || 'Unknown'}</Text>
              <View style={styles.callDetails}>
              {item.incoming && (
                <VectorIcon
                  name="arrow-down-left"
                  type="Feather"
                  size={20}
                  color={Colors.red}
                />
              )}
              {item.outgoing && (
                <VectorIcon
                  name="arrow-up-right"
                  type="Feather"
                  size={20}
                  color={Colors.tertiary}
                />
              )}
              <Text style={styles.shareLink}>{item.time || 'N/A'}</Text>
              </View>
            </View>
          </View>
       
          {item.video && (
            <VectorIcon
              name="videocam"
              type="Ionicons"
              size={24}
              color={Colors.tertiary}
            />
          )}
          {item.audio && (
            <VectorIcon
              name="phone-alt"
              type="FontAwesome5"
              size={16}
              color={Colors.tertiary}
            />
          )}
        </View>
      ))}
     
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 15,
  },
  imgSty: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callLink: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  recent: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: 20,
    paddingBottom: 10,
  },
  linkSection: {
    marginLeft: 15,
  },
  shareLink: {
    fontSize: 13,
    color: Colors.textGrey,
    marginLeft: 3,
  },
  callDetails:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  }
});

export default RecentCalls;
