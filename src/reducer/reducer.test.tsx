import { characterReducer } from './reducer';

describe('Auth Reducer', () => {
  test('should return load correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 1,
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
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
      page: 1,
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
      },
      {
        type: 'page',
        payload: 1,
      }
    );
    expect(newState).toEqual(mockPayload);
  });
  test('should return page correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 1,
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
      },
      {
        type: '',
        payload: null,
      }
    );
    expect(newState).toEqual(mockPayload);
  });
});
