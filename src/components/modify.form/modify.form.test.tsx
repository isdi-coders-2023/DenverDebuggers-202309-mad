import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormModify } from './modify.form';
import { BrowserRouter } from 'react-router-dom';

describe('Given CharacterForm Component', () => {
  describe('When we instatiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <FormModify></FormModify>
        </BrowserRouter>
      );
    });

    test('Then it should render input', () => {
      const element = screen.getAllByRole('combobox')[0];
      expect(element).toBeInTheDocument();
    });
  });
});
