import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './list';
import { AppContextProvider } from '../../context/app.context.provider';

jest.mock('../card/card');

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContextProvider>
          <List></List>
        </AppContextProvider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
