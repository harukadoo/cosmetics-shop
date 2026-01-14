import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerfume } from '../../types';

// Расширяем тип товара, добавляя количество
export interface ICartItem extends IPerfume {
    count: number;
}

interface CartState {
    items: ICartItem[];
    totalPrice: number;
}

// 1. Функция для получения данных из LocalStorage при старте
const getCartFromLS = (): ICartItem[] => {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
};

const initialState: CartState = {
    items: getCartFromLS(), // Загружаем сохраненные данные
    totalPrice: 0, // Можно тоже сохранять, но лучше пересчитывать
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

        // --- ДОБАВЬТЕ ЭТОТ БЛОК (ДЛЯ КНОПКИ "-") ---
        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            
            if (findItem) {
                // Уменьшаем на 1
                findItem.count--;
                
                // (Опционально) Если стало 0 или меньше - можно удалить товар совсем, 
                // но обычно мы блокируем кнопку "минус" на цифре 1 в UI, так что здесь просто минус.
            }
            
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        // -------------------------------------------

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