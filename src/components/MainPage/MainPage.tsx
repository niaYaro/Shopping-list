import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ListHeader from '../ListHeader/ListHeader'
import SeasonalOffersBlock from '../SeasonalOffersBlock/SeasonalOffersBlock'
import NewproductInput from '../NewproductInput/NewproductInput'
import List from '../List/List'
import { useAppSelector } from '../../hooks'
import { StatusBar } from 'expo-status-bar'
import FinalModal from '../FinalModal/FinalModal'
import { SeasonalOffersProvider } from '../contexts/SeasonalOffersContext'

const MainPage = () => {
    const prods = useAppSelector((state) => state.products);

    return (
        <SeasonalOffersProvider>
            <View style={styles.container}>
                <StatusBar style='auto'/>
                <ListHeader />
                <SeasonalOffersBlock />
                {prods && 
                    <List />
                }
                <NewproductInput />
                <FinalModal />
            </View>
        </SeasonalOffersProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });

export default MainPage