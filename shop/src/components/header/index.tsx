import '../../styles/header/header.scss';
import { useState, useEffect } from 'react';
import { Cart } from '../cart';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { items } = useSelector((state: RootState) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const location = useLocation();
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <header className="header">
            {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
            <div className="header__container">
                <button 
                    className={`header__burger ${isMenuOpen ? 'active' : ''}`} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

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
                    <Link to={'/'} className="header__nav-account">account</Link>
                    <button
                        className="header__container__right-nav__nav-btn"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        cart({totalCount})
                    </button>
                </div>
            </div>

            <div className={`header__mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to={'/'} className="header__mobile-menu__logo">BYRIEDO</Link>
                
                <nav className="header__mobile-menu__nav">
                    <Link to={'/'}>shop</Link>
                    <Link to={'/'}>about</Link>
                    <Link to={'/'}>contact</Link>
                    <Link to={'/'}>account</Link>
                </nav>
            </div>
        </header>
    )
}