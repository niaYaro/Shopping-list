import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Product } from '../../types/types';
import { getSeasonalProducts } from '../../helpers/helper';

const SeasonalProducts = () => {
    const [seasonProds, setSeasonProds] = useState([]);
    const [isSeasonalLoading, setIsSeasonalLoading] = useState(false);

    useEffect(() => {
        setIsSeasonalLoading(true)
        getSeasonalProducts()
            .then(data => {
                setSeasonProds(data)
            })
            .finally(() => {
                setIsSeasonalLoading(false)
            })
    }, [])
    
    return (
        <View>
            {isSeasonalLoading
                ? <ActivityIndicator 
                    size="large"
                    color="green"
                />
                : <View>
                    <Text>The following products are in high demand this season:</Text>
                    <View
                        style={styles.seasonalBox}
                    >
                        {seasonProds.map(prod => 
                            <TouchableOpacity
                            style={styles.seasonalBtn}
                            >
                                <Text style={styles.seasonalText}>+ {prod}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            }
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