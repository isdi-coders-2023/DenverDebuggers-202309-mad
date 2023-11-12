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
        <div className="header-buttons-mobile-container">
          <div className="all-chars-button-container">
            <Link to={'/home'}>
              <img
                src="./all-white.png"
                alt="All characters Icon"
                height="35"
                width="35"
              />
            </Link>
          </div>
          <div className="favorites-button-container">
            <Link to={'/favorites'}>
              <img
                src="./favourite-white.png"
                alt="Favorite Icon"
                height="35"
                width="35"
              />
            </Link>
          </div>
        </div>
        <div className="header-buttons-desktop-container">
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
