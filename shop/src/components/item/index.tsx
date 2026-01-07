import '../../styles/item/item.scss'
import perfumeImg from '../../images/perfume.jpg';
import plus from '../../images/plus.svg';
import { IPerfume } from '../../types';

interface ItemProps {
    perfume: IPerfume;
}

export const Item: React.FC<ItemProps> = ({ perfume }) => {
    return (
        <div className="item">
            <div className="item__container">
                <button className="item__container__btn" title="add to cart">
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