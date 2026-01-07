import { Item } from '../../components/item';
import '../../styles/homePage/homepage.scss';
import plus from '../../images/plus.svg';
import GroupedMenu from '../../components/menu/GroupedMenu';
import BasicMenu from '../../components/menu/BasicMenu';
import { IPerfume } from '../../types';
import perfumesDataRaw from '../../api/perfume.json';

const perfumesData: IPerfume[] = perfumesDataRaw as IPerfume[];

export const HomePage = () => {
    const featuredPerfume = perfumesData[0];

    return (
        <div className="home">
            <div className="home__container">
                <div className="hero">
                    <div className="hero__container">
                        <div className="item-card">
                            <div className="item-card__container">
                                <img className="item-card__container__img"></img>

                                <div className="item-card__container__info">
                                    <button className="item-card__container__info__btn" title="add to cart">
                                        <img src={plus} alt="plus" />
                                    </button>

                                    <p className="item-card__container__info__title">perfume bal d'arfique</p>
                                    <p className="item-card__container__info__price">165 $</p>
                                    <p className="item-card__container__info__size">50 ml</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="main">
                    <div className="main__container">
                        <div className="main__container__head">
                            <div className="main__container__head__filter">
                                <GroupedMenu />     
                            </div>

                            <p className="main__container__head__title">all perfumes</p>

                            <div className="main__container__head__sort">
                                <BasicMenu />
                            </div>
                        </div>

                        <div className="main__container__items">
                            {perfumesData.map((perfume) => (
                                <Item key={perfume.id} perfume={perfume} />
                            ))}
                        </div>

                        <button className="main__container__more-items">load more</button>
                    </div>
                </main>
            </div>
        </div>
    )
}