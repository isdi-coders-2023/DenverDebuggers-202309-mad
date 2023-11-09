import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>
      );
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});
