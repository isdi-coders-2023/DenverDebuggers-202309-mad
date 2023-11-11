import { characterReducer } from './reducer';
import { Character } from '../models/character';

describe('Auth Reducer', () => {
  const mockPayload = {
    characters: [],
    page: 1,
    filteredCharacters: [],
    selectedValue: '',
  };
  const mockPayload2 = {
    characters: [{} as Character],
    page: 1,
    filteredCharacters: [],
    selectedValue: '',
  };
  test('should return load correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: 'load',
      payload: [],
    });
    expect(newState).toEqual(mockPayload);
  });

  test('should return load correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: 'filter',
      payload: [],
    });
    expect(newState).toEqual(mockPayload);
  });

  test('should return page correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: 'page',
      payload: 1,
    });
    expect(newState).toEqual(mockPayload);
  });

  test('should return Add correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: 'create',
      payload: {} as Character,
    });
    expect(newState).toEqual(mockPayload2);
  });

  test('should return update correclty ', () => {
    const newState = characterReducer(mockPayload2, {
      type: 'update',
      payload: {} as Character,
    });
    expect(newState).toEqual(mockPayload2);
  });

  test('should return delete correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: 'delete',
      payload: 'string',
    });
    expect(newState).toEqual(mockPayload);
  });

  test('should return selectValue correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: 'select',
      payload: '',
    });
    expect(newState).toEqual(mockPayload);
  });

  test('should return default correclty ', () => {
    const newState = characterReducer(mockPayload, {
      type: '',
      payload: null,
    });
    expect(newState).toEqual(mockPayload);
  });
});
