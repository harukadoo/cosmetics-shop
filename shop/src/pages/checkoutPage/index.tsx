export const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-page__container">
                <h1 className="checkout-page__container__title">Checkout</h1>

                <div className="checkout">
                    <div className="checkout__container">
                        <div className="personal-info">
                            <div className="personal-info__container">
                                {/* 1. SECTION: PERSONAL INFORMATION */}
                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Personal information:</h2>
                                    
                                    {/* Row: First Name & Last Name */}
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

                                    {/* Row: Phone & Email */}
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

                                {/* 2. SECTION: DELIVERY DETAILS */}
                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Delivery details:</h2>

                                    {/* Row: Country & City */}
                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="country">Country / Region</label>
                                            <div className="personal-info__select-wrapper">
                                                <select className="personal-info__select" id="country">
                                                    <option value="uk">United Kingdom (UK)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="city">Town / City</label>
                                            <div className="personal-info__select-wrapper">
                                                <select className="personal-info__select" id="city">
                                                    <option value="london">London</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row: Street & Postcode */}
                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="street">Street</label>
                                            <input className="personal-info__input" type="text" id="street" />
                                        </div>
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="postcode">Postcode</label>
                                            <input className="personal-info__input" type="text" id="postcode" />
                                        </div>
                                    </div>

                                    {/* Row: Packaging & Shipping */}
                                    <div className="personal-info__row">
                                        <div className="personal-info__field">
                                            <label className="personal-info__label" htmlFor="packaging">Packaging type</label>
                                            <div className="personal-info__select-wrapper">
                                                <select className="personal-info__select" id="packaging">
                                                    <option value="no-plastic">Without plastic</option>
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

                                {/* 3. SECTION: PAYMENT */}
                                <div className="personal-info__section">
                                    <h2 className="personal-info__title">Payment:</h2>

                                    {/* Option: Apple Pay */}
                                    <label className="personal-info__payment-option">
                                        <div className="personal-info__payment-check">
                                            <input type="radio" name="payment" className="personal-info__radio" />
                                            <span className="personal-info__radio-text">Apple Pay</span>
                                        </div>
                                        <div className="personal-info__payment-icons">
                                            {/* <img src={ApplePayIcon} alt="Apple Pay" /> */}
                                            <span>Pay</span> 
                                        </div>
                                    </label>

                                    {/* Option: PayPal */}
                                    <label className="personal-info__payment-option">
                                        <div className="personal-info__payment-check">
                                            <input type="radio" name="payment" className="personal-info__radio" />
                                            <span className="personal-info__radio-text">PayPal</span>
                                        </div>
                                        <div className="personal-info__payment-icons">
                                            <span style={{color: '#003087', fontWeight: 'bold'}}>PayPal</span>
                                        </div>
                                    </label>

                                    {/* Option: Credit Card (Selected) */}
                                    <div className="personal-info__credit-card-group">
                                        <label className="personal-info__payment-option personal-info__payment-option--active">
                                            <div className="personal-info__payment-check">
                                                {/* Имитация чекбокса для выбранного состояния */}
                                                <div className="personal-info__checkbox-fake checked"></div>
                                                <span className="personal-info__radio-text">Credit or debit card</span>
                                            </div>
                                            <div className="personal-info__payment-icons">
                                                {/* Сюда иконки Visa/Mastercard */}
                                                <span style={{marginRight: '5px'}}>🔴</span>
                                                <span>🔵</span>
                                            </div>
                                        </label>

                                        {/* Nested Inputs for Credit Card */}
                                        <div className="personal-info__credit-card-details">
                                            <div className="personal-info__row">
                                                <div className="personal-info__field personal-info__field--wide">
                                                    <label className="personal-info__label" htmlFor="card-number">Card number</label>
                                                    <input className="personal-info__input" type="text" id="card-number" />
                                                </div>
                                                <div className="personal-info__field personal-info__field--small">
                                                    <label className="personal-info__label" htmlFor="expiration">Expiration date</label>
                                                    <input className="personal-info__input" type="text" id="expiration" />
                                                </div>
                                                <div className="personal-info__field personal-info__field--small">
                                                    <label className="personal-info__label" htmlFor="cvv">CVV code</label>
                                                    <input className="personal-info__input" type="text" id="cvv" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="order"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}