import { screen, render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useEffect } from 'react';
import { ApiSimpsons } from '../services/api.repo';
import { useCharacters } from './use.character';
import { Character } from '../models/character';

describe('Given the useTask hook', () => {
  ApiSimpsons.prototype.getAll = jest
    .fn()
    .mockResolvedValue([{ id: 34 } as unknown as Character]);
  // ApiRepo.prototype.updateTask = jest.fn();
  // ApiRepo.prototype.deleteTask = jest.fn();

  describe('When we run the hook inside a component', () => {
    beforeEach(async () => {
      const TestComponent = () => {
        const { characters, loadCharacters } = useCharacters();

        useEffect(() => {
          loadCharacters();
        }, [loadCharacters]);

        return (
          <>
            <h1>Test Component</h1>
            {console.log(characters)}
            <button>Update</button>
            <button>Delete</button>
          </>
        );
      };

      await act(async () => {
        render(<TestComponent></TestComponent>);
      });
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
      let item = screen.getByText('Delete');
      expect(item).toBeInTheDocument();
    });
  });
});
