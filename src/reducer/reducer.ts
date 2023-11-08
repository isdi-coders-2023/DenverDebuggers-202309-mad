import { ActionCharacter, State } from './actions';

export function characterReducer(
  state: State,
  { type, payload }: ActionCharacter
): State {
  switch (type) {
    case 'load':
      return { characters: payload, page: state.page };

    case 'page':
      return { characters: state.characters, page: payload };

    default:
      return { ...state };
  }
}
