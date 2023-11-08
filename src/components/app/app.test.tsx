import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './app';
import { AppContextProvider } from '../../context/app.context.provider';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    const p = 'Powered by: The Simpsons API';
    beforeEach(() => {
      render(
        <AppContextProvider>
          <App></App>
        </AppContextProvider>
      );
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
    test('Then it should render the title', () => {
      const element = screen.getByText(p);
      expect(element).toBeInTheDocument();
    });
  });
});
