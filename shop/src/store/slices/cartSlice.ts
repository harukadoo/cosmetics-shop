import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerfume } from '../../types';

export interface ICartItem extends IPerfume {
    count: number;
}

interface CartState {
    items: ICartItem[];
    totalPrice: number;
}

const getCartFromLS = (): ICartItem[] => {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
};

const initialState: CartState = {
    items: getCartFromLS(), 
    totalPrice: 0, 
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IPerfume>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            
            if (findItem) {
                findItem.count--;    
            }
            
            localStorage.setItem('cart', JSON.stringify(state.items));
        },

        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        
        clearCart(state) {
            state.items = [];
            localStorage.setItem('cart', JSON.stringify([]));
        }
    },
});

export const { addToCart, removeFromCart, clearCart, minusItem } = cartSlice.actions;
export default cartSlice.reducer;