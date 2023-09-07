import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../styles/global';
import MainPage from '../MainPage/MainPage';

const Layout = () => {
    return (
        <View style={globalStyles.container}>
            <MainPage/>
		</View>
    )
}

export default Layout;   

