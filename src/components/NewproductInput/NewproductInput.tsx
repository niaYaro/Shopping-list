import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getId } from '../../helpers/helper';
import { add } from '../../reducers/products';

const NewproductInput = () => {
    const [query, setQuery] = useState<string>('');
    const prods = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch();

	const pressButtonHandler = () => {
        if (query.trim().length < 1) {
            Alert.alert('OOPS!', 'You need to text a product', [
                {
                    text: 'Ok',
                    onPress: () => { return },
                }
            ])
        } else if (prods) {
			dispatch(add({id: getId(prods), title: query, inCart: false}))
		} else {
            dispatch(add({id: 1, title: query, inCart: false}))
		}
		setQuery('')
	}

    return (
        <View>
            <TextInput
                style={styles.input}
                value={query}
                onChangeText={(val) => setQuery(val)}
            ></TextInput>
            <View>
                <Button
                    title='Add product'
                    color={'green'}
                    onPress={pressButtonHandler}
                />
            </View>
        </View>
    )
}

export default NewproductInput

const styles = StyleSheet.create({
	input: {
		padding: 10,
		borderWidth: 1,
		marginBottom: 15,
		borderRadius: 5,
	},
});     