import { Link } from 'react-router-dom';
import { Character } from '../../models/character';
import './card.scss';
type Props = {
  character: Character;
  favorite: boolean;
};

export function Card({ character, favorite }: Props) {
  return (
    <li className="character-card">
      <Link
        to={(favorite ? '/details.favorite/' : '/details/') + character._id}
        style={{ textDecoration: 'none' }}
      >
        <div className="card-container">
          <div className="image-container">
            <img src={character.Imagen} alt={`imagen de ${character.Nombre}`} />
          </div>
          <div className="button-card-container">
            <p>{character.Nombre}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
