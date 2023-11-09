import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to={'/home'}>
          <img
            className="title-header"
            src="header-logo.png"
            alt="The Simpsons Logo"
            width="170"
            height="80"
          />
        </Link>
        <img
          className="hamburguer-logo"
          src="hamburguer-menu-logo.png"
          alt="Hamburguer Menu Icon"
          width="54"
          height="63"
        />
        <div className="header-buttons-container">
          <div>
            <button>Personajes</button>
          </div>
          <div>
            <button>Favoritos</button>
          </div>
        </div>
      </div>
    </header>
  );
}
