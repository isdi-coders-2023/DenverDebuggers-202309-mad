import { Character } from '../models/character';

export type ActionNotesTypes = 'load' | 'create' | 'update' | 'delete';

export type State = {
  characters: Character[];
  page: number;
  filteredCharacters: Character[];
  selectedValue: string;
};

type ActionCharacterAll = {
  type: 'load';
  payload: Character[];
};

type ActionCharactersCharacter = {
  type: 'create' | 'update';
  payload: Character;
};

type ActionCharacterId = {
  type: 'delete';
  payload: Character['_id'];
};

export type ChangePage = {
  type: 'page';
  payload: number;
};

export type FilterCharacters = {
  type: 'filter';
  payload: Character[];
};

export type SelectedValue = {
  type: 'select';
  payload: string;
};

export type Default = {
  type: '';
  payload: null;
};
export type ActionCharacter =
  | ActionCharacterAll
  | ChangePage
  | FilterCharacters
  | SelectedValue
  | ActionCharactersCharacter
  | ActionCharacterId
  | Default;

export const changePage = (payload: number): ActionCharacter => ({
  type: 'page',
  payload,
});

export const loadActionCreator = (payload: Character[]): ActionCharacter => ({
  type: 'load',
  payload,
});

export const filterCharacters = (payload: Character[]): ActionCharacter => ({
  type: 'filter',
  payload,
});

export const selectedValue = (payload: string): ActionCharacter => ({
  type: 'select',
  payload,
});

export const createActionCreator = (payload: Character): ActionCharacter => ({
  type: 'create',
  payload,
});

export const updateActionCreator = (payload: Character): ActionCharacter => ({
  type: 'update',
  payload,
});

export const deleteActionCreator = (
  payload: Character['_id']
): ActionCharacter => ({
  type: 'delete',
  payload,
});
