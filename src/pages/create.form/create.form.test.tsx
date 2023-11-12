import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa para tener acceso a las aserciones de jest-dom
import { FormCreate } from '../../components/create.form/create.form';

describe('FormCreate', () => {
  it('renders without crashing', () => {
    render(<FormCreate />);
  });

  it('submits the form successfully', async () => {
    const { getByLabelText, getByText } = render(<FormCreate />);

    fireEvent.change(getByLabelText('Nombre del personaje'), {
      target: { value: 'Nombre de prueba' },
    });
    fireEvent.change(getByLabelText('Historia del personaje'), {
      target: { value: 'Historia de prueba' },
    });

    fireEvent.submit(getByText('Enviar'));

    await waitFor(() => {
      expect(getByText('')).toBeInTheDocument();
    });
  });
});
