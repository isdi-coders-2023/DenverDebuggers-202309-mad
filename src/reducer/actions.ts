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
