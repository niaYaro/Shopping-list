import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ListHeader from '../ListHeader/ListHeader'
import SeasonalProducts from '../SeasonalProducts/SeasonalProducts'
import NewproductInput from '../NewproductInput/NewproductInput'
import List from '../List/List'
import { useAppSelector } from '../../hooks'
import { StatusBar } from 'expo-status-bar'
import FinalModal from '../FinalModal/FinalModal'

const MainPage = () => {
    const prods = useAppSelector((state) => state.products);
    const [seasonalOffers, setSeasonalOffers] = useState<string[]>([]);

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <ListHeader />
            <SeasonalProducts seasonalOffers={seasonalOffers} setSeasonalOffers={setSeasonalOffers}/>
            {prods && 
                <List />
            }
            <NewproductInput />
            <FinalModal setSeasonalOffers={setSeasonalOffers}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });

export default MainPage