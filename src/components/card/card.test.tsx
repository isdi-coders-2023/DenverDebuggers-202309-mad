import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';
import { Character } from '../../models/character';
import { BrowserRouter } from 'react-router-dom';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(
      <BrowserRouter>
        <Card character={{ Nombre: 'Bart', Imagen: '' } as Character}></Card>
      </BrowserRouter>
    );

    test('It should be in the document', () => {
      const element = screen.getByText('Bart');
      expect(element).toBeInTheDocument();
    });
  });
});
