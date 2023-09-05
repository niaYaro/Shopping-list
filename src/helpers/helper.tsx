import { Product } from '../types/types'

export const getId = (array: Product[]) => {
	return array.length + 1;
}