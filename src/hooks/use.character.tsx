import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { ApiSimpsons } from '../services/api.repo';
import { characterReducer } from '../reducer/reducer';
import {
  loadActionCreator,
  changePage,
  State,
  filterCharacters,
  selectedValue,
} from '../reducer/actions';

export function useCharacters() {
  const initialValue: State = {
    characters: [],
    page: 1,
    filteredCharacters: [],
    selectedValue: '',
  };
  const [state, dispatch] = useReducer(characterReducer, initialValue);

  const repo = useMemo(
    () => new ApiSimpsons(state.page),
    [state.page, state.selectedValue]
  );

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getAll();
      const loadedCharacters = loadedRepo.docs;
      console.log(loadedCharacters);
      // Síncrono
      if (state.selectedValue === '') {
        dispatch(loadActionCreator(loadedCharacters));
      } else {
        const filtered = loadedCharacters.filter((character) =>
          character.Estado.includes(state.selectedValue)
        );
        dispatch(filterCharacters(filtered));
      }
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
    dispatch(selectedValue(value));
  };

  function handleHome() {
    dispatch(changePage(1));
    dispatch(selectedValue(''));
  }

  return {
    loadCharacters,
    handleNext,
    handlePrevious,
    state,
    handleFilter,
    handleHome,
  };
}
