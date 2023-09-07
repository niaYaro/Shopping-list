import { Product } from '../types/types'

export const getId = (array: Product[]) => {
	return array.length + 1;
}

export const getSeasonalOffers = async () => {
	const response = await fetch('https://mocki.io/v1/2b020599-269a-4b08-a6cb-1acc70f28d43');
	return await response.json();
};