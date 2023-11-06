import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const p = 'Powered by: The Simpsons API';
    beforeEach(() => {
      render(<Footer></Footer>);
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
