import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { RootState } from '../../store/store';
import { CartItem } from '../../components/cartItem';
import { clearCart } from '../../store/slices/cartSlice';
import '../../styles/checkoutPage/checkoutpage.scss';
import { OrderMessage } from '../../components/messages/OrderMessage';

export const CheckoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items } = useSelector((state: RootState) => state.cart);

    const subTotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
    const deliveryCost = subTotal > 0 ? 15 : 0; 
    const total = subTotal + deliveryCost;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        street: '',
        postcode: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [isOrderSuccess, setIsOrderSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));

        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.country.trim()) newErrors.country = 'Country is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.street.trim()) newErrors.street = 'Street is required';
        if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handlePurchase = () => {
        if (validateForm()) {
            setIsOrderSuccess(true);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBackToHome = () => {
        dispatch(clearCart()); 
        navigate('/');
    };

    return (
        <div className="checkout-page">
            {isOrderSuccess && <OrderMessage onBackToHome={handleBackToHome} />}
            <div className="checkout-page__container">
                <h1 className="checkout-page__container__title">Checkout</h1>

                <div className="checkout">
                    <div className="checkout__container">
                        <div className="personal-info">
                            <div className="personal-info__container">
                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Personal information:</h2>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="firstName">First name</label>
                                            <input 
                                                className={`personal-info__input ${errors.firstName ? 'error' : ''}`} 
                                                type="text" 
                                                id="firstName"
                                                placeholder="First name" 
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                            {errors.firstName && <span className="input-error-text">{errors.firstName}</span>}
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="lastName">Last name</label>
                                            <input 
                                                className={`personal-info__input ${errors.lastName ? 'error' : ''}`} 
                                                type="text" 
                                                id="lastName" 
                                                placeholder="Last name" 
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                            {errors.lastName && <span className="input-error-text">{errors.lastName}</span>}
                                        </div>
                                    </div>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="phone">Phone</label>
                                            <input 
                                                className={`personal-info__input ${errors.phone ? 'error' : ''}`} 
                                                type="tel" 
                                                id="phone" 
                                                placeholder="Phone" 
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                            {errors.phone && <span className="input-error-text">{errors.phone}</span>}
                                        </div>
                                        <div className="personal-info__field">
                                           <label className="personal-info__label" htmlFor="email">Email</label>
                                            <input 
                                                className={`personal-info__input ${errors.email ? 'error' : ''}`} 
                                                type="email" 
                                                id="email" 
                                                placeholder="Email" 
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            {errors.email && <span className="input-error-text">{errors.email}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Delivery details:</h2>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="country">Country / Region</label>
                                            <input 
                                                className={`personal-info__input ${errors.country ? 'error' : ''}`} 
                                                type="text" 
                                                id="country" 
                                                placeholder="Country" 
                                                value={formData.country}
                                                onChange={handleInputChange}
                                            />
                                            {errors.country && <span className="input-error-text">{errors.country}</span>}
                                        </div>

                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="city">Town / City</label>
                                            <input 
                                                className={`personal-info__input ${errors.city ? 'error' : ''}`} 
                                                type="text" 
                                                id="city" 
                                                placeholder="City" 
                                                value={formData.city}
                                                onChange={handleInputChange}
                                            />
                                            {errors.city && <span className="input-error-text">{errors.city}</span>}
                                        </div>
                                    </div>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="street">Street</label>
                                            <input 
                                                className={`personal-info__input ${errors.street ? 'error' : ''}`} 
                                                type="text" 
                                                id="street" 
                                                placeholder="Street" 
                                                value={formData.street}
                                                onChange={handleInputChange}
                                            />
                                            {errors.street && <span className="input-error-text">{errors.street}</span>}
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="postcode">Postcode</label>
                                            <input 
                                                className={`personal-info__input ${errors.postcode ? 'error' : ''}`} 
                                                type="text" 
                                                id="postcode" 
                                                placeholder="Postcode" 
                                                value={formData.postcode}
                                                onChange={handleInputChange}
                                            />
                                            {errors.postcode && <span className="input-error-text">{errors.postcode}</span>}
                                        </div>
                                    </div>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="packaging">Packaging type</label>
                                            <div className="personal-info__select-wrapper">
                                                <select className="personal-info__select" id="packaging">
                                                    <option value="no-plastic">Without plastic</option>
                                                    <option value="no-plastic">With plastic</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="shipping">Shipping option</label>
                                            <div className="personal-info__select-wrapper">
                                                <select className="personal-info__select" id="shipping">
                                                    <option value="courier">By courier</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Payment:</h2>

                                    <label className="personal-info__payment-option">
                                        <div className="personal-info__payment-check">
                                            <input type="radio" name="payment" value="apple-pay" className="personal-info__radio" />
                                            <span className="personal-info__radio-text">Apple Pay</span>
                                        </div>
                                    </label>

                                    <label className="personal-info__payment-option">
                                        <div className="personal-info__payment-check">
                                            <input type="radio" name="payment" value="paypal" className="personal-info__radio" />
                                            <span className="personal-info__radio-text">PayPal</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="order">
                            <div className="order__container">
                                <h2 className="order__title">Your order:</h2>

                                <div className="order__summary">
                                    <div className="order__row">
                                        <span className="order__label">Subtotal:</span>
                                        <span className="order__value">{subTotal} $</span>
                                    </div>
                                    <div className="order__row">
                                        <span className="order__label">Delivery:</span>
                                        <span className="order__value">{deliveryCost} $</span>
                                    </div>
                                    <div className="order__divider"></div>
                                    <div className="order__row order__row--total">
                                        <span className="order__label">Total:</span>
                                        <span className="order__value">{total} $</span>
                                    </div>
                                </div>

                                <button 
                                    className="order__btn" 
                                    onClick={handlePurchase} 
                                    disabled={items.length === 0}
                                >
                                    Purchase
                                </button>

                                <div className="order__items-list">
                                    {items.length === 0 ? (
                                        <p style={{textAlign: 'center', color: '#999'}}>Your cart is empty</p>
                                    ) : (
                                        items.map((item) => (
                                            <CartItem key={item.id} item={item} />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
