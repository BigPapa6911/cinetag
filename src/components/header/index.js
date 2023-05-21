import HeaderLink from '../headerLink';
import { Link } from 'react-router-dom';
import style from './header.module.css'
import logo from './logo.png'

const Header = () => {
    return (
        <header className={style.header}>
            <Link to='./'>
                <img src={logo} alt="logo" ></img>
            </Link>
            <nav>
                <HeaderLink url='./'>
                    Inicio
                </HeaderLink>
                <HeaderLink url='./favorites'>
                    Favoritos
                </HeaderLink>
            </nav>

        </header>
    )
}


export default Header;