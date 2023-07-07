import { View, Text, FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'

const TaskList = ({list, onPressTask}) => {

  return (
    <View style={styles.view2}>
      <FlatList data={list} keyExtractor={(task) => task.id} renderItem={({item}) => RenderItemTask({item, onPressTask})}>
      </FlatList>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  view2: {
      height: "88%",
      backgroundColor: "#AEE2FF",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingVertical: 15,
  },
});