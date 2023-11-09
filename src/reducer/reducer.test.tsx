import { characterReducer } from './reducer';

describe('Auth Reducer', () => {
  test('should return load correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
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
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
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
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
      },
      {
        type: 'select',
        payload: '',
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return default correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = characterReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
      },
      {
        type: '',
        payload: null,
      }
    );
    expect(newState).toEqual(mockPayload);
  });
});
