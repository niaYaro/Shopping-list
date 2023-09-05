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
        // set: (products, action: PayloadAction<string>) => {
        //     products.push({ id: 1, title: action.payload})]
        // },
    }
})

export default productSlice.reducer;
export const { add } = productSlice.actions;