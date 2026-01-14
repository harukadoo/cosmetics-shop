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
import { ItemCard } from '../../components/itemCard';

const perfumesData: IPerfume[] = perfumesDataRaw as IPerfume[];
const ITEMS_PER_PAGE = 8    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(400);
    const featuredPerfume = perfumesData[0];
    const dispatch = useDispatch();
    const sortedProducts = useSelector(selectSortedProducts);

    const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
    const isShowButton = visibleCount < sortedProducts.length;
    const [selectedPerfume, setSelectedPerfume] = useState<IPerfume | null>(null);

    useEffect(() => {
        dispatch(setProducts(perfumesData));
    }, [dispatch]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + ITEMS_PER_PAGE);
    };

    const handleItemClick = (perfume: IPerfume) => {
        setSelectedPerfume(perfume);
    };

    const handleCloseCard = () => {
        setSelectedPerfume(null);
    }

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
                                <GroupedMenu />
                            </div>

                            <p className="main__container__head__title">all perfumes</p>

                            <div className="main__container__head__sort">
                                <BasicMenu />
                            </div>
                        </div>

                        <div className="main__container__items">
                            {filteredPerfumes.map((perfume) => (
                                <Item key={perfume.id} perfume={perfume} />
                            {sortedProducts.slice(0, visibleCount).map((perfume) => (
                                <Item key={perfume.id} perfume={perfume} onItemClick={handleItemClick}/>
                            ))}
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