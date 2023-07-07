import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {

    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={ 
                    item.completed ? 
                    styles.taskCompleted : 
                    styles.task
                } key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 200,
        padding: 10,
        backgroundColor: "#FEDEFF",
        borderRadius: 6,
        borderColor: "#B9F3FC",
        borderWidth: 2,
        marginBottom: 15,
    },
    taskCompleted: {
        width: 200,
        padding: 10,
        backgroundColor: "#FF9B9B",
        borderRadius: 6,
        borderColor: "#B9F3FC",
        borderBottomWidth: 2,
        borderRightWidth: 1,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
})