import { Item } from '../../components/item';
import '../../styles/homePage/homepage.scss';
import plus from '../../images/plus.svg';
import BasicMenu from '../../components/menu/BasicMenu';
import PriceFilter from '../../components/filters/PriceFilter';
import { IPerfume } from '../../types';
import perfumesDataRaw from '../../api/perfume.json';
import { useState, useMemo } from 'react';

const perfumesData: IPerfume[] = perfumesDataRaw as IPerfume[];

export const HomePage = () => {
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(400);
    const featuredPerfume = perfumesData[0];

    const filteredPerfumes = useMemo(() => {
        return perfumesData.filter(perfume => 
            perfume.price >= minPrice && perfume.price <= maxPrice
        );
    }, [minPrice, maxPrice]);

    const handlePriceChange = (min: number, max: number) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

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
                                <PriceFilter onPriceChange={handlePriceChange} minPrice={minPrice} maxPrice={maxPrice} />     
                            </div>

                            <p className="main__container__head__title">all perfumes</p>

                            <div className="main__container__head__sort">
                                <BasicMenu />
                            </div>
                        </div>

                        <div className="main__container__items">
                            {filteredPerfumes.map((perfume) => (
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