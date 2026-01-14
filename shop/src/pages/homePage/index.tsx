import { Item } from '../../components/item';
import '../../styles/homePage/homepage.scss';
import plus from '../../images/plus.svg';
import BasicMenu from '../../components/menu/BasicMenu';
import PriceFilter from '../../components/filters/PriceFilter';
import { IPerfume } from '../../types';
import perfumesDataRaw from '../../api/perfume.json';
import { useEffect, useState, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setProducts, selectSortedProducts } from '../../store/slices/productsSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { ItemCard } from '../../components/itemCard';

export const HomePage = () => {
    const perfumesData: IPerfume[] = perfumesDataRaw as IPerfume[];
    const featuredPerfume = perfumesData[0];
    const ITEMS_PER_PAGE = 8;

    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(400);
    const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
    const [selectedPerfume, setSelectedPerfume] = useState<IPerfume | null>(null);

    const dispatch = useDispatch();
    const sortedProducts = useSelector(selectSortedProducts);

    useEffect(() => {
        dispatch(setProducts(perfumesData));
    }, [dispatch]);

    const processedProducts = useMemo(() => {
        return sortedProducts.filter(perfume =>
            perfume.price >= minPrice && perfume.price <= maxPrice
        );
    }, [sortedProducts, minPrice, maxPrice]);

    const isShowButton = visibleCount < processedProducts.length;

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + ITEMS_PER_PAGE);
    };

    const handleItemClick = (perfume: IPerfume) => {
        setSelectedPerfume(perfume);
    };

    const handleCloseCard = () => {
        setSelectedPerfume(null);
    }

    const handlePriceChange = (min: number, max: number) => {
        setMinPrice(min);
        setMaxPrice(max);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleAddHeroItemToCart = () => {
        if (featuredPerfume) {
            dispatch(addToCart(featuredPerfume));
        }
    };

    return (
        <div className="home">
            {selectedPerfume && (
                <ItemCard
                    perfume={selectedPerfume}
                    onClose={handleCloseCard}
                />
            )}
            <div className="home__container">
                <div className="hero">
                    <div className="hero__container">
                        <div className="item-card">
                            <div className="item-card__container">
                                <img 
                                    src={featuredPerfume.image} 
                                    alt={featuredPerfume.title}
                                    className="item-card__container__img" 
                                />

                                <div className="item-card__container__info">
                                    <button 
                                        className="item-card__container__info__btn" 
                                        title="add to cart"
                                        onClick={handleAddHeroItemToCart}
                                    >
                                        <img src={plus} alt="plus" />
                                    </button>

                                    <p className="item-card__container__info__title">
                                        {featuredPerfume.title}
                                    </p>
                                    <p className="item-card__container__info__price">
                                        {featuredPerfume.price} {featuredPerfume.currency}
                                    </p>
                                    <p className="item-card__container__info__size">
                                        {featuredPerfume.volume}
                                    </p>
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
                            {processedProducts.length > 0 ? (
                                processedProducts.slice(0, visibleCount).map((perfume) => (
                                    <Item
                                        key={perfume.id}
                                        perfume={perfume}
                                        onItemClick={handleItemClick}
                                    />
                                ))
                            ) : (
                                <div className="main__container__no-items">
                                    no item was found
                                </div>
                            )}
                        </div>

                        {isShowButton && (
                            <button
                                className="main__container__more-items"
                                onClick={handleLoadMore}
                            >
                                load more
                            </button>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}
