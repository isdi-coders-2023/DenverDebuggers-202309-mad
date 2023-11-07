import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Card } from '../card/card';

export function List() {
  const {
    characterTools: { characters, loadCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      <ul className="character-list">
        {characters.map((item) => (
          <Card key={item._id} character={item}></Card>
        ))}
      </ul>
    </>
  );
}
