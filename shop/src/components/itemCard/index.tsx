import React from 'react';
import { IPerfume } from '../../types';
import '../../styles/itemCard/itemCard.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

interface ItemCardProps {
    perfume: IPerfume;
    onClose: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ perfume, onClose }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(perfume));
        onClose();
    };
    return (
        <div className="item-card__overlay" onClick={onClose}>
            <div className="item-card__modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✕</button>

                <div className="item-card__content">
                    <img src={perfume.image} alt={perfume.title} />

                    <div className="info">
                        <h2>{perfume.title}</h2>

                        <p className="info__description">{perfume.description}</p>
                        <div className="info-2">
                            <p className="info-2__price">{perfume.volume}</p>
                            <p className="info-2__price">{perfume.price} {perfume.currency}</p>
                        </div>
                    </div>

                    <button 
                        className="item-card__add-to-cart"
                        onClick={handleAddToCart}
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}