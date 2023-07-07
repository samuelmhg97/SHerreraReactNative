import { View, Text, Modal, Pressable } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const ModalTasks = ({modalVisible, setModalVisible, taskActive, onPressStatus}) => {
    
  return (
    <Modal animationType='fade' transparent= {true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>
                    {taskActive.task}
                </Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => onPressStatus(true)} style={[styles.button , styles.buttonDone]}>
                        <Text style={styles.textStyle}>
                            Done
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => onPressStatus(false)} style={[styles.button , styles.buttonNotyet]}>
                        <Text style={styles.textStyle}>
                            Not Yet
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => onPressStatus(!modalVisible)} style={[styles.button , styles.buttonOpen]}>
                        <Text style={styles.textStyle}>
                            Cancel
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default ModalTasks

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#C3EDC0",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#FFFEC4",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    button: {
        borderRadius: 7,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#AEE2FF",
    },
    buttonDone: {
        backgroundColor: "#FDFFAE",
    },
    buttonNotyet: {
        backgroundColor: "#E97777",
    },
    textStyle: {
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});