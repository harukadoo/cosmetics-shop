import '../../styles/item/item.scss'
import plus from '../../images/plus.svg';
import { IPerfume } from '../../types';
import React from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

interface ItemProps {
    perfume: IPerfume;
    onItemClick: (perfume: IPerfume) => void;
}

export const Item: React.FC<ItemProps> = ({ perfume, onItemClick }) => {
    const dispatch = useDispatch();

    const onClickAdd = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        dispatch(addToCart(perfume));
    };;

    return (
        <div className="item">
            <div 
                className="item__container" 
                onClick={() => onItemClick(perfume)}
                style={{ cursor: 'pointer' }}
            >
                <button 
                    className="item__container__btn" 
                    title="add to cart"
                    onClick={onClickAdd} 
                >
                    <img src={plus} alt="plus" />
                </button>

                <div className="item__container__img" style={{ backgroundImage: `url(${perfume.image})` }}></div>

                <div className="item__container__info">
                    <p className="item__container__info__title">{perfume.title}</p>
                    <p className="item__container__info__price">{perfume.price} {perfume.currency}</p>
                </div>
            </div>
        </div>
    )
}