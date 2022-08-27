import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/layout/header.scss';

function Header() {
    return (
      <header className="header">
        <Link
          className="header__container"
          to="/"
          title="Volver a la página principal"
        >
          <img src={logo} className='header__logo' title='Logo Harry Potter' alt='Logo Harry Potter' />
          <h1 className='header__title'>It's leviOsa, not leviosA</h1>
        </Link>
      </header>
    );
  }
  
  export default Header;
  