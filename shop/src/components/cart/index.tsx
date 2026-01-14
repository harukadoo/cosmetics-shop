import '../../styles/cart/cart.scss';
import { CartItem } from '../cartItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

interface CartProps {
    onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ onClose }) => {
    const { items } = useSelector((state: RootState) => state.cart);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className="cart">
            <div className="cart__container">
                {items.length === 0 ? (
                    <div className="cart__container__empty">
                        <p className="cart__container__alert">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart__container__items">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="cart__container__footer">
                            <div className="cart__container__total-price">
                                <span>Total:</span>
                                <span>{totalPrice} $</span>
                            </div>
                            <Link 
                                to={'/checkout'} 
                                className="cart__container__btn"
                                onClick={onClose}
                            >
                                checkout
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}