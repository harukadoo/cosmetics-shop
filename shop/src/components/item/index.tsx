import '../../styles/item/item.scss'
import perfumeImg from '../../images/perfume.jpg';
import plus from '../../images/plus.svg';

export const Item = () => {
    return (
        <div className="item">
            <div className="item__container">
                <button className="item__container__btn" title="add to cart">
                    <img src={plus} alt="plus" />
                </button>

                <div className="item__container__img" style={{ backgroundImage: `url(${perfumeImg})` }}></div>

                <div className="item__container__info">
                    <p className="item__container__info__title">title</p>
                    <p className="item__container__info__price">250 $</p>
                </div>
            </div>
        </div>
    )
}