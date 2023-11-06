import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    const h1 = 'The Simpsons API Challenge';
    beforeEach(() => {
      render(<Header></Header>);
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
    test('Then it should render the title', () => {
      const element = screen.getByText(h1);
      expect(element).toBeInTheDocument();
    });
  });
});
