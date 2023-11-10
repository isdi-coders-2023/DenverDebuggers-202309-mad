import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Card } from '../card/card';

export function ListFavorite() {
  const { state, loadCharactersFav } = useContext(AppContext);

  useEffect(() => {
    loadCharactersFav();
  }, [loadCharactersFav]);

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
