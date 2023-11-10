import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { ApiSimpsons, ApiSimpsonsPrivate } from '../services/api.repo';
import { characterReducer } from '../reducer/reducer';
import {
  loadActionCreator,
  changePage,
  State,
  filterCharacters,
  selectedValue,
  createActionCreator,
  updateActionCreator,
  deleteActionCreator,
} from '../reducer/actions';
import { Character } from '../models/character';

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

  const repoFav = useMemo(() => new ApiSimpsonsPrivate(), []);

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

  const loadCharactersFav = useCallback(async () => {
    try {
      const loadedCharacters = await repoFav.getPrivateCharacters();
      dispatch(loadActionCreator(loadedCharacters));
    } catch (error) {}
  }, [repoFav]);

  const addCharacter = async (character: Partial<Character>) => {
    try {
      console.log('entro');
      const newCharacter = await repoFav.createCharacter(character);
      dispatch(createActionCreator(newCharacter));
    } catch (error) {
      console.log((error as Error).message);
    }
    console.log(character);
    console.log(state.characters);
  };

  const modifyCharacter = async (
    id: Character['_id'],
    character: Partial<Character>
  ) => {
    console.log(id);
    try {
      const modifiedCharacter = await repoFav.modifyCharacter(id, character);
      dispatch(updateActionCreator(modifiedCharacter));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteCharacter = async (id: Character['id']) => {
    try {
      // Asíncrona -> API
      await repoFav.deleteCharacter(id);
      // Síncrono -> Vista
      // setNotes(notes.filter((item) => item.id !== id));
      dispatch(deleteActionCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

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
    addCharacter,
    loadCharactersFav,
    modifyCharacter,
    deleteCharacter,
  };
}
