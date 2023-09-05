import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ListHeader = () => {
    return (
        <View style={styles.listHeaderContainer}>
            <Ionicons name="cart" size={28} color="black" />
            <Text
                style={styles.listHeader}
            >
                My products list
            </Text>
        </View>
    )
}

export default ListHeader

const styles = StyleSheet.create({
	listHeaderContainer: {
        flexDirection: 'row',
		marginBottom: 20,
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	listHeader: {
        marginLeft: 15,
		fontSize: 36,
		},
});