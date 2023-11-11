import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormCreate } from './create.form';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Given CharacterForm Component', () => {
  describe('When we instatiate', () => {
    let nameInput: HTMLInputElement;
    let submitButton: HTMLButtonElement;
    const handleSubmit = jest.fn();
    beforeEach(() => {
      render(
        <BrowserRouter>
          <FormCreate></FormCreate>
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
      await userEvent.type(nameInput, 'Bart');
      expect(nameInput).toHaveValue('Bart');
      expect(submitButton).toBeInTheDocument;
      fireEvent.submit;
      await userEvent.click(submitButton);
      expect(handleSubmit).toHaveBeenCalled;
    });
  });
});
