import React from 'react'
import { StyleSheet, View } from 'react-native'
import ListHeader from '../ListHeader/ListHeader'
import SeasonalProducts from '../SeasonalProducts/SeasonalProducts'
import NewproductInput from '../NewproductInput/NewproductInput'
import List from '../List/List'
import { useAppSelector } from '../../hooks'

const MainPage = () => {
    const prods = useAppSelector((state) => state.products)
    return (
        <View style={styles.container}>
            <ListHeader />
            <SeasonalProducts />
            {prods && 
                <List />
            }
            <NewproductInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });

export default MainPage