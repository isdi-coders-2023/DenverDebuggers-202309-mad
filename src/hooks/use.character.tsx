import { useCallback, useMemo, useState } from 'react';
import { ApiSimpsons } from '../services/api.repo';
import { Character } from '../models/character';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const repo = useMemo(() => new ApiSimpsons(page), [page]);

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getAll();
      const loadedCharacters = loadedRepo.docs;

      // Síncrono
      setCharacters(loadedCharacters);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return {
    characters,
    loadCharacters,
    page,
    setPage,
  };
}
