import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/app.context';
import '@testing-library/jest-dom';
import { Character } from '../../models/character';
import { State } from '../../reducer/actions';
import { BrowserRouter } from 'react-router-dom';
import { DetailsFavorite } from './details.favorite';
const mockContext: ContextStructure = {
  state: {
    characters: [{ Nombre: 'Bart' }],
    page: 1,
    filteredCharacters: [{}],
    selectedValue: '',
  } as State,
  loadCharacters: jest
    .fn()
    .mockResolvedValue([{ Nombre: 'Bart' } as Character]),
} as unknown as ContextStructure;
const mockContext2: ContextStructure = {
  state: {
    characters: [{ Nombre: 'Bart' }],
    page: 1,
    filteredCharacters: [{}],
    selectedValue: 'Vivo',
  } as State,
  loadCharacters: jest
    .fn()
    .mockResolvedValue([{ Nombre: 'Bart' } as Character]),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContext.Provider value={mockContext}>
            <DetailsFavorite></DetailsFavorite>
          </AppContext.Provider>
        </BrowserRouter>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContext.Provider value={mockContext2}>
            <DetailsFavorite></DetailsFavorite>
          </AppContext.Provider>
        </BrowserRouter>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
