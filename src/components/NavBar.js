// Fragmento <> </> para no utilizar etiquetas
import LogoHeader from '../assets/images/logo-dricco.avif';
import CartWidget from './CartWidget';

const NavBar = () => {
    ;
return (
   <header className='header__menuGen'>
        <nav className='header__menu'>
            <img className='header__logo' src={LogoHeader} alt="LogoHeader" />
            <CartWidget />
        </nav>
   </header>
)
}

export default NavBar;