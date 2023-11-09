import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { ApiSimpsons } from '../services/api.repo';
import { characterReducer } from '../reducer/reducer';
import { loadActionCreator, changePage, State } from '../reducer/actions';
import { useState } from 'react';

export function useCharacters() {
  const initialValue: State = { characters: [], page: 1 };
  const [state, dispatch] = useReducer(characterReducer, initialValue);
  const [filteredCharacters, setFilteredCharacters] = useState(
    state.characters
  );
  const repo = useMemo(() => new ApiSimpsons(state.page), [state.page]);

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getAll();
      const loadedCharacters = loadedRepo.docs;

      // Síncrono
      dispatch(loadActionCreator(loadedCharacters));
    } catch (error) {}
  }, [repo]);

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(state.page + 1));
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(state.page - 1));
  };

  const handleFilter = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    const value = element.value;
    const filtered = state.characters.filter((character) =>
      character.Estado.includes(value)
    );
    setFilteredCharacters(filtered);
  };

  return {
    loadCharacters,
    handleNext,
    handlePrevious,
    state,
    filteredCharacters,
    handleFilter,
  };
}
