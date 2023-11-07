import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';

export function List() {
  const {
    characterTools: { characters, loadCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return <>{console.log(characters)}</>;
}
