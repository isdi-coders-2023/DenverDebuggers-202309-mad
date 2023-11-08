import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Card } from '../card/card';
import './list.scss';

export function List() {
  const { state, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <div className="list-container">
      <ul className="character-list">
        {state.characters.map((item) => (
          <Card key={item._id} character={item}></Card>
        ))}
      </ul>
    </div>
  );
}
