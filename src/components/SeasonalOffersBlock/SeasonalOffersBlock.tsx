import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { getId, getSeasonalProducts } from '../../helpers/helper';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { add } from '../../reducers/products';
import { useSeasonalOffers } from '../../contexts/SeasonalOffersContext';


const SeasonalOffersBlock: React.FC = () => {
    const [isSeasonalLoading, setIsSeasonalLoading] = useState(false);
    const dispatch = useAppDispatch();
    const prods = useAppSelector((state) => state.products);
    const { seasonalOffers, setSeasonalOffers} = useSeasonalOffers();
    
    useEffect(() => {
        setIsSeasonalLoading(true)
        setTimeout(() => getSeasonalProducts()
            .then(data => {
                setSeasonalOffers(data)
            })
            .catch(error => {
                console.error('Error fetching seasonal products:', error);
              })
            .finally(() => {
                setIsSeasonalLoading(false)
            }), 1500)
    }, [])
    
    return (
        <View>
            {isSeasonalLoading
                ? <ActivityIndicator 
                    size="large"
                    color="green"
                />
                : <View>
                    <Text>
                        {seasonalOffers.length > 0 && (
                            'The following products are in high demand this season:'
                        )}
                    </Text>
                    <View style={styles.seasonalBox}>
                        {seasonalOffers.map((prod, i) => 
                            <TouchableOpacity
                                key={i}
                                style={styles.seasonalBtn}
                                onPress={() => {
                                    const updatedSeasonalOffers = seasonalOffers.filter(p => p !== prod);
                                    setSeasonalOffers(updatedSeasonalOffers);
                                    dispatch(add({id: getId(prods), title: prod, inCart: false}))
                                }}>
                                <Text style={styles.seasonalText}>+ {prod}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            }
        </View>
    )
}

export default SeasonalOffersBlock

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