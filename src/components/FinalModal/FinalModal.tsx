import React, {useState, useEffect} from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks';
import { deleteAll } from '../../reducers/products';
import { AntDesign } from '@expo/vector-icons';
import { getSeasonalProducts } from '../../helpers/helper';

interface Props {
  setSeasonalOffers: (arg: string[]) => void;
}

const FinalModal: React.FC<Props> = ({
  setSeasonalOffers,
}) => {
const prods = useAppSelector((state) => state.products)
const dispatch = useDispatch();
const [modalVisible, setModalVisible] = useState(false);

useEffect(() => {setModalVisible(prods.length > 0 && prods.every(prod => prod.inCart === true))}, [prods])

return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={styles.closeBtn}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false)
                    }}
                >
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalText}>You did it! All items are good to go. Proceed to checkout!</Text>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                  setModalVisible(!modalVisible)
                  dispatch(deleteAll());
                  getSeasonalProducts()
                    .then(data => {
                        setSeasonalOffers(data)
                    })
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
      elevation: 5,
    },
    closeBtn: {
      flex: 0,
      alignItems: 'flex-end',
      width: 300,
      paddingBottom: 10,
      justifyContent: 'flex-end'
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