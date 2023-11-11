import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';
import { BrowserRouter } from 'react-router-dom';
import { Character } from '../../models/character';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const character = { Nombre: 'Bart', Imagen: '' };
    render(
      <BrowserRouter>
        <Card character={character as Character} favorite={true}></Card>
      </BrowserRouter>
    );

    test('It should be in the document', () => {
      const element = screen.getByText('Bart');
      expect(element).toBeInTheDocument();
    });
  });
});
