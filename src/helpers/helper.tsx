import { Product } from '../types/types'

export const getId = (array: Product[]) => {
	return array.length + 1;
}

export const getSeasonalProducts = () => {
	return fetch('https://mocki.io/v1/5ac0222c-16b9-44bf-9229-9b2167112244')
		.then(response => response.json())
};