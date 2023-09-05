import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useAppSelector } from '../../hooks'

const List = () => {
const prods = useAppSelector((state) => state.products)

    return (
        <ScrollView>
            {prods.map(prod => (
                <View style={styles.productContainer} key={prod.id}>
                    <Text
                        style={styles.productText}
                    >
                        {prod.id}. {prod.title}
                    </Text>
                    <BouncyCheckbox
                        fillColor="green"
                    />
                </View>
            ))}
        </ScrollView>
    )
}

export default List

const styles = StyleSheet.create({
	productContainer: {
		paddingBottom: 15,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	productText: {
		fontSize: 24,
	},
	productTextTaken: {
		textDecorationLine: 'line-through'
	},
});     