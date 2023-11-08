import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AppContextProvider } from '../../context/app.context.provider';
import { AppRoutes } from '../approutes/app.routes';
import { BrowserRouter } from 'react-router-dom';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContextProvider>
            <AppRoutes></AppRoutes>
          </AppContextProvider>
        </BrowserRouter>
      );
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
