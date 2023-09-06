import React from 'react';
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

