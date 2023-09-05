import React, { useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { v4 as uuidv4 } from 'uuid';
// import { StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Button } from 'react-native';
// import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { getId } from './src/helpers/helper';
// import { Product } from './src/types/types';
// import { SelectList } from 'react-native-dropdown-select-list'
import Layout from './src/components/Layout/Layout';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
);
}

