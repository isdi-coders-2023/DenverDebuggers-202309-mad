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

  describe('When calling the create method', () => {
    test('Then it should fetch data from the Api and return the response', async () => {
      const privateData = {} as unknown as Partial<Character>;
      const expectedUrl = 'http://localhost:3000/privateCharacters';
      const repo = new ApiSimpsonsPrivate();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(privateData),
      });
      const response = await repo.createCharacter(privateData);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(privateData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(privateData);
    });
  });

  describe('When calling the delete method', () => {
    test('Then it should fecth data from the API and return the response', async () => {
      const mockId = '1';
      const expectedUrl = `http://localhost:3000/privateCharacters/${mockId}`;
      const repo = new ApiSimpsonsPrivate();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
      const response = await repo.deleteCharacter(mockId);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'DELETE',
      });
      expect(response).toEqual({});
    });
  });

  describe('When calling the modify method', () => {
    test('Then it should fecth data from the API and return the response', async () => {
      const mockId = '1';
      const privateData = { id: 1 } as unknown as Partial<Character>;
      const expectedUrl = 'http://localhost:3000/privateCharacters/1';
      const repo = new ApiSimpsonsPrivate();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(privateData),
      });

      const response = await repo.modifyCharacter(mockId, privateData);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'PATCH',
        body: JSON.stringify(privateData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(privateData);
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
});
