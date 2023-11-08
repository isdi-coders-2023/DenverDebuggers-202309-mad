import { Character } from '../models/character';

export type ActionNotesTypes = 'load' | 'create' | 'update' | 'delete';

export type State = {
  characters: Character[];
  page: number;
};

type ActionCharacterAll = {
  type: 'load';
  payload: Character[];
};

export type ChangePage = {
  type: 'page';
  payload: number;
};

export type Default = {
  type: '';
  payload: null;
};
export type ActionCharacter = ActionCharacterAll | ChangePage | Default;

export const changePage = (payload: number): ActionCharacter => ({
  type: 'page',
  payload,
});

export const loadActionCreator = (payload: Character[]): ActionCharacter => ({
  type: 'load',
  payload,
});
