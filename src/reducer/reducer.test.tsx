import { characterReducer } from './reducer';

describe('Auth Reducer', () => {
  test('should return load correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 0,
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 0,
      },
      {
        type: 'load',
        payload: [],
      }
    );
    expect(newState).toEqual(mockPayload);
  });
  test('should return page correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 0,
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 0,
      },
      {
        type: 'page',
        payload: 0,
      }
    );
    expect(newState).toEqual(mockPayload);
  });
});
