import './NavBarHeader.css';
import {Link} from 'react-router-dom';

export default function NavBarHeader() {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <Link to='/signup' className='navbar__link'>Регистрация</Link>
                </li>
                <li className='navbar__item'>
                    <Link to='/signin'>
                        <button className='navbar__button navbar__button_login'>Войти</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
