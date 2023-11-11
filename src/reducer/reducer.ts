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

    case 'create':
      return {
        characters: [...state.characters, payload],
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    case 'update':
      return {
        characters: state.characters.map((item) =>
          item._id === payload._id ? payload : item
        ),
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    case 'delete':
      return {
        characters: state.characters.filter((item) => item._id !== payload),
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    default:
      return { ...state };
  }
}
