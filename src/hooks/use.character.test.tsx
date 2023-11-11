import { screen, render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useEffect, useReducer } from 'react';
import { ApiSimpsons, ApiSimpsonsPrivate } from '../services/api.repo';
import { useCharacters } from './use.character';
import { Character } from '../models/character';
import { userEvent } from '@testing-library/user-event';
import { State } from '../reducer/actions';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn().mockReturnValue([{}, jest.fn()]),
}));

describe('Given the useTask hook', () => {
  ApiSimpsons.prototype.getAll = jest
    .fn()
    .mockResolvedValue([{ id: 34 } as unknown as Character]);
  ApiSimpsonsPrivate.prototype.getPrivateCharacters = jest
    .fn()
    .mockResolvedValue([{ id: 34 } as unknown as Character]);

  describe('When we run the hook inside a component', () => {
    beforeEach(async () => {
      const TestComponent = () => {
        const {
          loadCharacters,
          handleNext,
          handlePrevious,
          handleHome,
          handleFilter,
          loadCharactersFav,
          deleteCharacter,
          modifyCharacter,
          addCharacter,
        } = useCharacters();

        useEffect(() => {
          loadCharacters();
        }, [loadCharacters]);
        useEffect(() => {
          loadCharactersFav();
        }, [loadCharactersFav]);
        return (
          <>
            <h1>Test Component</h1>

            <button onClick={loadCharacters}>Load</button>
            <button onClick={loadCharactersFav}>LoadFav</button>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleFilter}>Filter</button>
            <button onClick={handleHome}>Home</button>
            <button onClick={() => addCharacter({ Nombre: 'Bart' })}>
              Add
            </button>
            <button onClick={() => deleteCharacter('1234')}>Delete</button>
            <button onClick={() => modifyCharacter('1234', { Nombre: 'Bart' })}>
              Modify
            </button>
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
    });

    test('Test of loading characters public api', async () => {
      const loadbutton = screen.getByText('Load');
      await userEvent.click(loadbutton);
      expect(ApiSimpsons.prototype.getAll).toHaveBeenCalled();
    });

    test('Test of loading characters private api', async () => {
      const loadbutton = screen.getByText('LoadFav');
      await userEvent.click(loadbutton);
      expect(
        ApiSimpsonsPrivate.prototype.getPrivateCharacters
      ).toHaveBeenCalled();
    });

    test('Then it should have been called ', async () => {
      let reducer;
      reducer = jest.fn();

      const mockInitialState: State = {
        page: 1,
        selectedValue: 'load',
      } as unknown as State;
      const nextButton = screen.getByText('Next');
      expect(nextButton).toBeInTheDocument();
      await userEvent.click(nextButton);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
      const prevButton = screen.getByText('Previous');
      await userEvent.click(prevButton);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
      const filter = screen.getByText('Filter');
      expect(filter).toBeInTheDocument();
      await userEvent.click(filter);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
      const home = screen.getByText('Home');
      expect(home).toBeInTheDocument();
      await userEvent.click(home);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();

      const load = screen.getByText('Load');
      expect(load).toBeInTheDocument();
      await userEvent.click(load);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();

      const deleteChar = screen.getByText('Delete');
      expect(deleteChar).toBeInTheDocument();
      await userEvent.click(deleteChar);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();

      const modifyChar = screen.getByText('Modify');
      expect(modifyChar).toBeInTheDocument();
      await userEvent.click(modifyChar);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();

      const addChar = screen.getByText('Add');
      expect(addChar).toBeInTheDocument();
      await userEvent.click(addChar);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
    });
  });
});
