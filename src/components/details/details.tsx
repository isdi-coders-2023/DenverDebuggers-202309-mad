import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../context/app.context';
import './details.scss';
import { Character } from '../../models/character';
export function Details() {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  let characters: Character[] = [];
  if (state.selectedValue === '') {
    characters = state.characters;
  } else {
    characters = state.filteredCharacters;
  }

  const character = characters.find((element) => element._id === id);

  return (
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
        <Link to={'/'}>
          <img src="/arrow.png" alt="Boton para ir para atras" width={23} />
        </Link>
      </div>
    </div>
  );
}
