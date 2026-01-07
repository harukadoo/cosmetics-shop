import '../../styles/header/header.scss'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container__left-nav">
                    <Link to={'/'}>shop</Link>
                    <Link to={'/'}>about</Link>
                    <Link to={'/'}>contact</Link>
                </div>

                <Link to={'/'} className="header__container__logo">BYRIEDO</Link>

                <div className="header__container__right-nav">
                    <Link to={'/'}>search</Link>
                    <Link to={'/'}>account</Link>
                    <Link to={'/'}>cart(0)</Link>
                </div>
            </div>
        </header>
    )
}