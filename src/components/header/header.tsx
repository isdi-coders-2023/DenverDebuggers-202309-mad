import { Link } from 'react-router-dom';
import './header.scss';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

export function Header() {
  const { handleHome } = useContext(AppContext);
  return (
    <header>
      <div className="header-container">
        <Link to={'/'} onClick={handleHome}>
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
            <Link to={'/home'}>
              <button>Personajes</button>
            </Link>
          </div>
          <div>
            <Link to={'/favorites'}>
              <button>Favoritos</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
