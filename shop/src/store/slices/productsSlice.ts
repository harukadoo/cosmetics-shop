import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerfume } from '../../types';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/productsSlice';
import cartReducer from '../slices/cartSlice';

export type SortType = 'default' | 'price-asc' | 'price-desc';

interface ProductsState {
    items: IPerfume[];
    sortType: SortType;
}

const initialState: ProductsState = {
    items: [],
    sortType: 'default',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
        setProducts(state, action: PayloadAction<IPerfume[]>) {
            state.items = action.payload;
        },
       
        setSortType(state, action: PayloadAction<SortType>) {
            state.sortType = action.payload;
        },
    },
});

export const { setProducts, setSortType } = productsSlice.actions;

export const selectSortedProducts = (state: RootState) => {
    const { items, sortType } = state.products;
    
    const itemsCopy = [...items];

    if (sortType === 'price-asc') {
        return itemsCopy.sort((a, b) => a.price - b.price);
    }
    
    if (sortType === 'price-desc') {
        return itemsCopy.sort((a, b) => b.price - a.price);
    }

    return items; 
};

export default productsSlice.reducer;

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;