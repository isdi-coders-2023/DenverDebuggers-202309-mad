import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/app.context';
import { List } from './list';
import '@testing-library/jest-dom';
import { Character } from '../../models/character';
import { State } from '../../reducer/actions';
const mockContext: ContextStructure = {
  characterTools: {
    state: {
      characters: [{ Nombre: 'Bart' }],
      page: 1,
    } as State,
    loadCharacters: jest
      .fn()
      .mockResolvedValue([{ Nombre: 'Bart' } as Character]),
  },
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <List></List>
        </AppContext.Provider>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('', () => {
      expect(mockContext.characterTools.loadCharacters).toHaveBeenCalled();
      const element = screen.getByText('Bart');
      expect(element).toBeInTheDocument();
    });
  });
});
