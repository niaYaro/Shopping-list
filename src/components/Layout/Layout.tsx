import React from 'react';
import {
    View,
} from 'react-native';
import { 
    useAppSelector,
} from '../../hooks';
import ListHeader from '../ListHeader/ListHeader';
import List from '../List/List';
import NewproductInput from '../NewproductInput/NewproductInput';
import { globalStyles } from '../../styles/global';
import SeasonalProducts from '../SeasonalProducts/SeasonalProducts';

const Layout = () => {
    const prods = useAppSelector((state) => state.products)

    return (
        <View style={globalStyles.container}>
            <ListHeader />
            <SeasonalProducts />
			{prods && 
                <List />
			}
            <NewproductInput />
		</View>
    )
}

export default Layout;   