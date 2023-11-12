import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ErrorComponent } from './error';

describe('Given Error Page component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ErrorComponent />);
    });

    test('It should be in the document', () => {
      const element = screen.getByText(/DO-OH/i);
      expect(element).toBeInTheDocument();
    });
  });
});
