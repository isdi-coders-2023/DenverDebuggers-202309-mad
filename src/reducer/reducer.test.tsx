import { characterReducer } from './reducer';
import { Character } from '../models/character';

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
        type: 'filter',
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

  test('should return Add correclty ', () => {
    const mockPayload = {
      characters: [{} as Character],
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
        type: 'create',
        payload: {} as Character,
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return update correclty ', () => {
    const mockPayload = {
      characters: [{} as Character],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = characterReducer(
      {
        characters: [{} as Character],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
      },
      {
        type: 'update',
        payload: {} as Character,
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return delete correclty ', () => {
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
        type: 'delete',
        payload: 'string',
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return selectValue correclty ', () => {
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
