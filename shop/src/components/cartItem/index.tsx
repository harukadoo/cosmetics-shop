import '../../styles/cartItem/cartItem.scss';
import React from 'react';
import itemImage from '../../images/perfume.jpg';
import { useDispatch } from 'react-redux';
import { addToCart, minusItem, removeFromCart, ICartItem } from '../../store/slices/cartSlice';

interface CartItemProps {
    item: ICartItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const [count, setCount] = React.useState(1);
    const dispatch = useDispatch();

    const handleDecrease = () => {
        if (item.count > 1) {
            dispatch(minusItem(item.id));
        }
    };

    const handleIncrease = () => {
        dispatch(addToCart(item));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };
    return (
        <div className="cart-item">
            <div className="cart-item__container">
                <img src={itemImage} alt="item img" className="cart-item__container__img" />

                <div className="cart-item__container__first-column">
                    <p className="cart-item__container__first-column__title">{item.title}</p>

                    <div className="cart-item__container__first-column__quantity">
                        <button 
                            className="cart-item__container__first-column__quantity__btn" 
                            onClick={handleDecrease}
                            disabled={item.count <= 1} 
                        >
                            −
                        </button>
                        
                        <span className="cart-item__container__first-column__quantity-value">
                            {item.count}
                        </span>

                        <button 
                            className="cart-item__container__first-column__quantity__btn" 
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="cart-item__container__second-column">
                    <button 
                        className="cart-item__container__second-column__btn"
                        onClick={handleRemove}
                    >
                        ✕
                    </button>

                    <p className="cart-item__container__second-column__price">
                        {item.price * item.count} $
                    </p>
                </div>
            </div>
        </div>
    )
}