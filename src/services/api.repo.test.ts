import { Character } from '../models/character';
import { ApiSimpsons } from './api.repo';

describe('Given ApiRepo class', () => {
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
    test('Then method getTask should be used', async () => {
      const repo = new ApiSimpsons(1);
      expect(repo.getAll()).rejects.toThrow();
    });
  });
});
