import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormCreate } from './create.form';
import { BrowserRouter } from 'react-router-dom';

describe('Given CharacterForm Component', () => {
  describe('When we instatiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <FormCreate></FormCreate>
        </BrowserRouter>
      );
    });

    test('Then it should render input', () => {
      const element = screen.getAllByRole('combobox')[0];
      expect(element).toBeInTheDocument();
    });
  });
});
