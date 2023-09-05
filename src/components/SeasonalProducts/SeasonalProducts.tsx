import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const SeasonalProducts = () => {
  return (
    <View>
        <Text>The following products are in high demand this season:</Text>
        <View
            style={styles.seasonalBox}
        >
            <TouchableOpacity
                style={styles.seasonalBtn}
            >
                <Text style={styles.seasonalText}>+ Pen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.seasonalBtn}
            >
                <Text style={styles.seasonalText}>+ Book</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SeasonalProducts

const styles = StyleSheet.create({
	seasonalBox: {
        flexDirection: 'row',
		padding: 10,
	},
	seasonalBtn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
        backgroundColor: 'green',
        borderRadius: 15,
	},
	seasonalText: {
        color: 'white',
	},
});     