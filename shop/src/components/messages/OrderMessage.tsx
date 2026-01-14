import '../../styles/messages/orderMessage.scss';

export const OrderMessage = ({ onBackToHome }: { onBackToHome: () => void }) => {
    return (
        <div className="order-message">
            <div className="order-message">
                <div className="order-message__container">
                    <div style={{ fontSize: '50px', marginBottom: '15px' }}>🎉</div>
                    <h2 className="order-message__title">Thank you!</h2>
                    <p className="order-message__text">Your order has been successfully placed.</p>
                    <button className="order-message__btn" onClick={onBackToHome}>
                        Return to Shop
                    </button>
                </div>
            </div>
        </div>
    )
}