import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/app.context';
import './details.scss';
export function Details() {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const characters = state.characters;
  const character = characters.find((element) => element._id === id);

  return (
    <>
      <div className="details-container">
        <div className="image-container">
          <img src={character?.Imagen} alt={character?.Nombre} />
        </div>
        <div className="info-container">
          <h2>{character?.Nombre}</h2>
          <p>{character?.Historia}</p>
          <p>
            <span>Estado: </span>
            {character?.Estado}
          </p>
          <p>
            <span>Género: </span>
            {character?.Genero}
          </p>
          <p>
            <span>Ocupación: </span>
            {character?.Ocupacion}
          </p>
        </div>
      </div>
    </>
  );
}
