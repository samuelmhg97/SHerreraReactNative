import { StyleSheet, TextInput, View, TouchableOpacity, Text, FlatList, Modal, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import TaskList from "../Components/TaskList/TaskList"
import ModalTasks from "../Components/Modal"


const MainScreen = () => {

    const [list, setList] = useState([])
    const [input, setInput] =  useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({})

    const onAddTask = () => {
       
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ])
        console.log("Se agrego la task")
        console.log(list)
        }

        const onPressTask = (task) => {
            setTaskActive(task)
            setModalVisible(!modalVisible)
        }
        
        const onPressStatus = (status) => {
          const filterTask = list.filter(taskList => taskList.id !== taskActive.id)
          const orderedList =[
            ...filterTask, 
            {
              ...taskActive,
              completed: status
            }
          ].sort(function(a,b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })
          setList(orderedList)
          setModalVisible(!modalVisible)
        }
        return (
          <View style={styles.container}>
            <Header input={input} onAddTask={onAddTask} setInput={setInput}/>
            <TaskList list={list} onPressTask={onPressTask}/>
            <ModalTasks modalVisible={modalVisible} setModalVisible={setModalVisible} taskActive={taskActive} onPressStatus={onPressStatus}/>
          </View>
  )
}

export default MainScreen


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
});