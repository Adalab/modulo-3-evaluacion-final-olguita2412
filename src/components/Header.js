import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="header__profile">
        <Link
          className="header__profile__link"
          to="/"
          title="Volver a la página principal"
        >
          <h1>Harry Potter</h1>
        </Link>
      </header>
    );
  }
  
  export default Header;
  