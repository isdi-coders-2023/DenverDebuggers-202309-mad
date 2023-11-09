import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Card } from '../card/card';
import './list.scss';
import { Filter } from '../filter/filter';

export function List() {
  const { state, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  let chars = [];
  if (state.selectedValue === '') {
    chars = state.characters;
  } else {
    chars = state.filteredCharacters;
  }

  return (
    <div className="list-container">
      <Filter></Filter>
      <ul className="character-list">
        {chars.map((item) => (
          <Card key={item._id} character={item}></Card>
        ))}
      </ul>
    </div>
  );
}
