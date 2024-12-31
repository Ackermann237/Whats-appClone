import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyStatus from '../components/MyStatus'
import RecentStatus from '../components/RecentStatus'
import ViewStatus from '../components/ViewStatus'
import { Colors } from '../theme/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const StatusListScreen = () => {
  return (
    <ScrollView
    contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
   <MyStatus/>
   <RecentStatus/>
   <ViewStatus/>
     
    </ScrollView>
  )
}
const styles = StyleSheet.create({
 container:{
 
  backgroundColor:Colors.background,
  padding:16,
 }
})
export default StatusListScreen