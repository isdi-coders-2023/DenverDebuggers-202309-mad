import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Card } from '../card/card';

export function List() {
  const {
    characterTools: { state, loadCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <ul className="character-list">
      {state.characters.map((item) => (
        <Card key={item._id} character={item}></Card>
      ))}
    </ul>
  );
}
