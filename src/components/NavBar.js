// Fragmento <> </> para no utilizar etiquetas
import LogoHeader from '../assets/images/logoRicco.png';
import IconCar from '../assets/icons/IconCar.png';
const NavBar = () => {
    ;
return (
   <header className='header__menuGen'>
       <img className='header__logo' src={LogoHeader} alt="LogoHeader" />
        <nav className='header__menu'>
            <a className='header__link' href="#">TV</a>
            <a className='header__link' href="#">Aire Split</a>
            <a className='header__link' href="#">Calefaccion</a>
            <a className='header__link' href="#">Lavarropas</a>
            <a className='header__link' href="#">Termotanques</a>
            <a className='header__link' href="#">Cocinas</a>
            <a className='header__link' href="#">Muebles</a>
            <a className='header__link' href="#">Colchones y Sommiers</a>
            <img className='header__icon' src={IconCar} alt="" />
        </nav>
            
   </header>
)
}

export default NavBar;