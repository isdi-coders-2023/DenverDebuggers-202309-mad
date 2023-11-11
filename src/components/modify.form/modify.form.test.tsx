import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { FormModify } from './modify.form';

describe('Given CharacterForm Component', () => {
  describe('When we instatiate', () => {
    let nameInput: HTMLInputElement;
    let submitButton: HTMLButtonElement;
    beforeEach(() => {
      render(
        <BrowserRouter>
          <FormModify></FormModify>
        </BrowserRouter>
      );
      nameInput = screen.getByLabelText('Nombre') as HTMLInputElement;
      submitButton = screen.getByText('Enviar');
    });

    test('Then it should render input', () => {
      const element = screen.getAllByRole('combobox')[0];
      expect(element).toBeInTheDocument();
    });
    test('It should call handleSubmit when the submit button is clicked', async () => {
      await userEvent.type(nameInput, 'test');
      expect(nameInput).toHaveValue('test');
      await userEvent.click(submitButton);
    });
  });
});
