import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './footer';
import { BrowserRouter } from 'react-router-dom';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const p = 'Powered by: The Simpsons API';
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Footer></Footer>
        </BrowserRouter>
      );
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
    test('Then it should render the title', () => {
      const element = screen.getByText(p);
      expect(element).toBeInTheDocument();
    });
  });
});
