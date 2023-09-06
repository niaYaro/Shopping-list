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

interface Props {
    seasonalOffers: string[];
    setSeasonalOffers: (arg: string[]) => void;
}

const SeasonalProducts: React.FC<Props> = ({
    seasonalOffers,
    setSeasonalOffers,
}) => {
    // const [seasonProds, setSeasonProds] = useState([]);
    const [isSeasonalLoading, setIsSeasonalLoading] = useState(false);
    const dispatch = useAppDispatch();
    const prods = useAppSelector((state) => state.products);
    // const isListEmpty = seasonProds.length === 0;
    
    useEffect(() => {
        setIsSeasonalLoading(true)
        setTimeout(() => getSeasonalProducts()
            .then(data => {
                setSeasonalOffers(data)
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
                    <View
                        style={styles.seasonalBox}
                    >
                        {seasonalOffers.map((prod, i) => 
                            <TouchableOpacity
                            key={i}
                            style={styles.seasonalBtn}
                            onPress={() => {
                                const updatedSeasonalOffers = seasonalOffers.filter(p => p !== prod);
                                setSeasonalOffers(updatedSeasonalOffers);
                                // setSeasonalOffers((prev: string[]) => prev.filter(p => p !== prod))
                                dispatch(add({id: getId(prods), title: prod, inCart: false}))
                            }}
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