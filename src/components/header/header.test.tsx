import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Header></Header>);
    });
    test('It should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});
