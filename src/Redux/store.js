import {configureStore} from '@reduxjs/toolkit'
import { productSlice } from './slices/ProductsSlice'
import { userSlice } from './slices/UserSlice'

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        user: userSlice.reducer
    }
})