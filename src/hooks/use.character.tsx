import { useCallback, useMemo, useReducer, useState } from 'react';
import { ApiSimpsons } from '../services/api.repo';
import { characterReducer } from '../reducer/reducer';
import { loadActionCreator } from '../reducer/actions';

export function useCharacters() {
  const [characters, dispatch] = useReducer(characterReducer, []);
  const [page, setPage] = useState(1);
  const repo = useMemo(() => new ApiSimpsons(page), [page]);

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getAll();
      const loadedCharacters = loadedRepo.docs;

      // Síncrono
      dispatch(loadActionCreator(loadedCharacters));
    } catch (error) {}
  }, [repo]);

  return {
    characters,
    loadCharacters,
    page,
    setPage,
  };
}
