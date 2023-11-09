import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Filter } from './filter';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../../context/app.context.provider';

describe('Given Filter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContextProvider>
            <Filter></Filter>
          </AppContextProvider>
        </BrowserRouter>
      );
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
