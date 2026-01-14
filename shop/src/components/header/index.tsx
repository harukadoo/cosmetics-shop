import '../../styles/header/header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cart } from '../cart';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items } = useSelector((state: RootState) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <header className="header">
            {isCartOpen && <Cart />}
            <div className="header__container">
                <div className="header__container__left-nav">
                    <Link to={'/'}>shop</Link>
                    <Link to={'/'}>about</Link>
                    <Link to={'/'}>contact</Link>
                </div>

                <Link to={'/'} className="header__container__logo">BYRIEDO</Link>

                <div className="header__container__right-nav">
                    {isSearchOpen ? (
                        <div className="header__container__right-nav__search-active">
                            <input
                                type="text"
                                placeholder="Type to search..."
                                autoFocus
                                className="header__container__right-nav__search-active__search-input"
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="header__container__right-nav__search-active__close-btn"
                            >
                                ✕
                            </button>
                        </div>
                    ) : (

                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="header__container__right-nav__nav-btn"
                        >
                            search
                        </button>
                    )}
                    <Link to={'/'}>account</Link>
                    <button
                        className="header__container__right-nav__nav-btn"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        cart({totalCount})
                    </button>
                </div>
            </div>
        </header>
    )
}