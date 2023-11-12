import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Card } from '../card/card';
import { Link } from 'react-router-dom';
import './list.favorite.scss';

export function ListFavorite() {
  const { state, loadCharactersFav } = useContext(AppContext);

  useEffect(() => {
    loadCharactersFav();
  }, [loadCharactersFav]);

  return (
    <div className="list-container">
      <Link to={'/create.form/' + 'new'} style={{ textDecoration: 'none' }}>
        <div className="create-container">
          <img
            src="add.png"
            alt="Agregar un Personaje"
            height="40"
            width="40"
          />
          <p>Crear personaje</p>
        </div>
      </Link>
      <ul className="character-list">
        {state.characters.map((item) => (
          <Card key={item._id} character={item} favorite={true}></Card>
        ))}
      </ul>
    </div>
  );
}
