import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CartItem } from '../../components/cartItem';
import '../../styles/checkoutPage/checkoutpage.scss';

export const CheckoutPage = () => {
    const { items } = useSelector((state: RootState) => state.cart);

    const subTotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
    const deliveryCost = subTotal > 0 ? 15 : 0; 
    const total = subTotal + deliveryCost;

    return (
        <div className="checkout-page">
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
                                            <label className="personal-info__label" htmlFor="first-name">First name</label>
                                            <input className="personal-info__input" type="text" id="first-name" placeholder="First name" />
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="last-name">Last name</label>
                                            <input className="personal-info__input" type="text" id="last-name" placeholder="Last name" />
                                        </div>
                                    </div>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="phone">Phone</label>
                                            <input className="personal-info__input" type="tel" id="phone" placeholder="Phone" />
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="email">Email</label>
                                            <input className="personal-info__input" type="email" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Delivery details:</h2>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="country">Country / Region</label>
                                            <input
                                                className="personal-info__input"
                                                type="text"
                                                id="country"
                                                placeholder="Country"
                                            />
                                        </div>

                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="city">Town / City</label>
                                            <input
                                                className="personal-info__input"
                                                type="text"
                                                id="city"
                                                placeholder="City"
                                            />
                                        </div>
                                    </div>

                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="street">Street</label>
                                            <input className="personal-info__input" type="text" id="street" placeholder="Street" />
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="postcode">Postcode</label>
                                            <input className="personal-info__input" type="text" id="postcode" placeholder="Postcode" />
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

                                <button className="order__btn">Purchase</button>

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