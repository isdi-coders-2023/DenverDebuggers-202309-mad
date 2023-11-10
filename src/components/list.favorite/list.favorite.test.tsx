import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/app.context';
import '@testing-library/jest-dom';
import { Character } from '../../models/character';
import { State } from '../../reducer/actions';
import { BrowserRouter } from 'react-router-dom';
import { ListFavorite } from './list.favorite';
const mockContext: ContextStructure = {
  state: {
    characters: [{ Nombre: 'Bart' }],
    page: 1,
    filteredCharacters: [{ Nombre: 'Bart' }],
  } as State,
  loadCharactersFav: jest
    .fn()
    .mockResolvedValue([{ Nombre: 'Bart' } as Character]),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContext.Provider value={mockContext}>
            <ListFavorite></ListFavorite>
          </AppContext.Provider>
        </BrowserRouter>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('', () => {
      expect(mockContext.loadCharactersFav).toHaveBeenCalled();
      const element = screen.getByText('Bart');
      expect(element).toBeInTheDocument();
    });
  });
});
