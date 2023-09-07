import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Product } from '../types/types'

const initialProducts: Product[] = [];

const productSlice = createSlice({
    name: 'product',
    initialState: initialProducts,
    reducers: {
        add: (products, action: PayloadAction<Product>) => {
            products.push(action.payload)
        },
        toggleInCart: (products, action: PayloadAction<Product>) => {
            return products.map(prod => {
                if (prod.id === action.payload.id) {
                    return {
                        ...prod,
                        inCart: !prod.inCart,
                    }
                }
                return prod
            })
        },
        deleteAll: (products) => {
            products = [];
            return products;
        },
    }
})

export default productSlice.reducer;
export const { add, toggleInCart, deleteAll } = productSlice.actions;