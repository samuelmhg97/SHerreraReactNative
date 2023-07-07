import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const Header = ({input, setInput, onAddTask}) => {
  return (
    <View style={styles.view1}>
      <TextInput placeholder='Ingrese Actividad' value={input} onChangeText={setInput} style={styles.input} />
      <TouchableOpacity onPress={onAddTask} style={styles.button} >
        <Text style={styles.buttonText}>
            Agregar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  view1: {
      height: "12%",
      flexDirection: "row",
      gap: 20,
      paddingHorizontal: 10,
      paddingBottom: 10,
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "#C3EDC0",
      width: "100%",
  },
  input: {
      width: 250,
      height: 35,
      borderColor: "#FDFFAE",
      borderWidth: 1,
      borderRadius:2,
      color: "grey",
      fontSize: 15,
      paddingLeft: 10
  },
  button: {
      height: 35,
      width: 90,
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: "#AEE2FF",
  },
  buttonText: {
      fontSize: 16,
      textAlign: "center",
  },
});