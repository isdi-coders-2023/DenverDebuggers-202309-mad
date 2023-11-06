import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './app';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    const h1 = 'The Simpsons API Challenge';
    beforeEach(() => {
      render(<App></App>);
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
