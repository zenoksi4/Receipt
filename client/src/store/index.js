import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products/productsSlice'
import receiptSlice from './receipt/receiptSlice'

export const store = configureStore(({
    reducer: {
        products: productsSlice,
        receipt: receiptSlice
    }
}))