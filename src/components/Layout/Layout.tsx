import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../styles/global';
import FinalModal from '../FinalModal/FinalModal';
import MainPage from '../MainPage/MainPage';

const Layout = () => {
    return (
        <View style={globalStyles.container}>
            {/* <FinalModal /> */}
            <MainPage/>
		</View>
    )
}

export default Layout;   

