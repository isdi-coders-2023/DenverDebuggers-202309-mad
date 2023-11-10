import { Character } from '../models/character';
import { ApiSimpsons, ApiSimpsonsPrivate } from './api.repo';

describe('Given ApiSimpson class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getAll should be used', async () => {
      const repo = new ApiSimpsons(1);
      const expected: Character[] = [];
      const result = await repo.getAll();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getAll should not be used', async () => {
      const repo = new ApiSimpsons(1);
      expect(repo.getAll()).rejects.toThrow();
    });
  });
});

describe('Given ApiSimpsonPrivate class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getPrivateCharacters should be used', async () => {
      const repo = new ApiSimpsonsPrivate();
      const expected: Character[] = [];
      const result = await repo.getPrivateCharacters();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method createCharacters should be used', async () => {
      const newCharacter = { Nombre: 'Homer Simpson', Genero: 'masculino' };
      const repo = new ApiSimpsonsPrivate();
      const createdCharacter = await repo.createCharacter(newCharacter);
      expect(createdCharacter).toBeDefined();
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getPrivateCharacters should not be used', async () => {
      const repo = new ApiSimpsonsPrivate();
      expect(repo.getPrivateCharacters()).rejects.toThrow();
    });
  });
});
