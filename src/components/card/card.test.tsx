import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';
import { Character } from '../../models/character';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(<Card character={{ Nombre: '', Imagen: '' } as Character}></Card>);

    test('It should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
