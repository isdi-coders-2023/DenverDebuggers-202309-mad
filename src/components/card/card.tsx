import './card.scss';
import { Character } from '../../models/character';

type Props = {
  character: Character;
};

export function Card({ character }: Props) {
  return (
    <li className="character-card">
      <div className="card-container">
        <p>{character.Imagen}</p>
        <div className="button-container">
          <button className="card-button">{character.Nombre}</button>
        </div>
      </div>
    </li>
  );
}
