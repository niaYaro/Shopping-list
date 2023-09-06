import React, {useState, useEffect} from 'react';
import { Modal, Pressable, StyleSheet, Text, View} from 'react-native'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks';
import { deleteAll } from '../../reducers/products';

const FinalModal = () => {
const prods = useAppSelector((state) => state.products)
const dispatch = useDispatch();
const [modalVisible, setModalVisible] = useState(false);

useEffect(() => {setModalVisible(prods.length > 0 && prods.every(prod => prod.inCart === true))}, [prods])

return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        // setModalVisible(!modalVisible);
        // }}
        >
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>You did it! All items are good to go. Proceed to checkout!</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
                setModalVisible(!modalVisible)
                dispatch(deleteAll())
                }}>
            <Text style={styles.textStyle}>Create new list</Text>
            </Pressable>
        </View>
        </View>
    </Modal>
)
}

const styles = StyleSheet.create({
    centeredView: {
        // backgroundColor: 'rgba(0, 151, 19)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // opacity: 0.2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: 'green',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 24,
        textAlign: 'center',
    },
  });

export default FinalModal