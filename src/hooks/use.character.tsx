import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { ApiSimpsons } from '../services/api.repo';
import { characterReducer } from '../reducer/reducer';
import {
  loadActionCreator,
  changePage,
  State,
  filterCharacters,
} from '../reducer/actions';

export function useCharacters() {
  const initialValue: State = {
    characters: [],
    page: 1,
    filteredCharacters: [],
  };
  const [state, dispatch] = useReducer(characterReducer, initialValue);

  const repo = useMemo(() => new ApiSimpsons(state.page), [state.page]);

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getAll();
      const loadedCharacters = loadedRepo.docs;
      console.log(loadedCharacters);
      dispatch(filterCharacters([]));
      // Síncrono

      dispatch(loadActionCreator(loadedCharacters));
    } catch (error) {}
  }, [repo]);

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(state.page + 1));
    console.log(state.page);
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(state.page - 1));
  };
  const handleFilter = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    const value = element.value;
    console.log(value);

    const filtered = state.characters.filter((character) =>
      character.Estado.includes(value)
    );
    dispatch(filterCharacters(filtered));
  };

  return {
    loadCharacters,
    handleNext,
    handlePrevious,
    state,
    handleFilter,
  };
}
