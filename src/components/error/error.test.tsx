import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Error } from './error';

describe('Given Error Page component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Error />);
    });

    test('It should be in the document', () => {
      // Use a more flexible query to find any text content within the component
      const element = screen.getByText(/./); // This will match any text content
      expect(element).toBeInTheDocument();
    });
  });
});
