import { ActionCharacter, State } from './actions';

export function characterReducer(
  state: State,
  { type, payload }: ActionCharacter
): State {
  switch (type) {
    case 'load':
      return {
        characters: payload,
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    case 'page':
      return {
        characters: state.characters,
        page: payload,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    case 'filter':
      return {
        characters: state.characters,
        page: state.page,
        filteredCharacters: payload,
        selectedValue: state.selectedValue,
      };

    case 'select':
      return {
        characters: state.characters,
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: payload,
      };

    default:
      return { ...state };
  }
}
