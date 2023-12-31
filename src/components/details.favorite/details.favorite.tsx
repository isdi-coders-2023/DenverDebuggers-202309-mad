import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../context/app.context';
import './details.favorite.scss';
export function DetailsFavorite() {
  const { id } = useParams();
  const { state, deleteCharacter } = useContext(AppContext);

  const character = state.characters.find((element) => element._id === id);

  return (
    <div className="details-container">
      <div className="image-container">
        <img src={character?.Imagen} alt={character?.Nombre} />
      </div>
      <div className="info-container">
        <h2>{character?.Nombre}</h2>
        <div className="p-container">
          <p>{character?.Historia}</p>
        </div>
        <div className="p-container">
          <p>
            <span>Estado: </span>
            {character?.Estado}
          </p>
        </div>
        <div className="p-container">
          <p>
            <span>Género: </span>
            {character?.Genero}
          </p>
        </div>
        <div className="p-container">
          <p>
            <span>Ocupación: </span>
            {character?.Ocupacion}
          </p>
        </div>
        <div className="crud-container">
          <Link to={'/favorites'}>
            <img src="/arrow.png" alt="Boton para ir para atras" width={23} />
          </Link>
          <div className="ud-container">
            <Link to={'/create.form/' + character?.id}>
              <img src="/modify.png" alt="Boton para modificar" width={23} />
            </Link>
            <Link
              to={'/favorites'}
              onClick={() => deleteCharacter(character?._id as string)}
            >
              <img src="/delete.png" alt="Boton para eliminar" width={23} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
