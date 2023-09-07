import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useAppSelector } from '../../hooks'
import { useDispatch } from 'react-redux'
import { toggleInCart } from '../../reducers/products'

const List = () => {
const prods = useAppSelector((state) => state.products)
const dispatch = useDispatch();

return (
    <ScrollView>
            {prods.map(prod => {
                const dynemicTextStyle = prod.inCart
                    ? styles.productTextTaken
                    : styles.productText

                return (
                <View style={styles.productContainer} key={prod.id}>
                    <Text style={dynemicTextStyle}>
                        {prod.id}. {prod.title .slice(0,1).toUpperCase() + prod.title.slice(1)}
                    </Text>
                    <BouncyCheckbox
                        fillColor="green"
                        onPress={() => {dispatch(toggleInCart(prod))}}
                    />
                </View>
            )})}
        </ScrollView>
    )
}

export default List

const styles = StyleSheet.create({
	productContainer: {
        backgroundColor: 'white',
        elevation: 2,
        marginBottom: 10,
        marginHorizontal: 5,
		padding: 5,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	productText: {
		fontSize: 24,
        
	},
	productTextTaken: {
        color: '#999',
        fontSize: 24,
		textDecorationLine: 'line-through'
	},
});     