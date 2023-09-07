import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { SeasonalOffersProvider } from '../../contexts/SeasonalOffersContext';
import ListHeader from '../ListHeader/ListHeader';
import SeasonalOffersBlock from '../SeasonalOffersBlock/SeasonalOffersBlock';
import NewproductInput from '../NewproductInput/NewproductInput';
import FinalModal from '../FinalModal/FinalModal';
import { useAppSelector } from '../../hooks';
import List from '../List/List';
import { StatusBar } from 'expo-status-bar'

const Layout = () => {
    const prods = useAppSelector((state) => state.products);

    return (
        <SeasonalOffersProvider>
            <View style={globalStyles.container}>
                <StatusBar
                    backgroundColor="green"
                />
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

export default Layout;   

