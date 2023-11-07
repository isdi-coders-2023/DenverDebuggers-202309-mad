import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './pagination';
import { userEvent } from '@testing-library/user-event';
import { AppContextProvider } from '../../context/app.context.provider';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const handlePrevious = jest.fn();
    const handleNext = jest.fn();
    beforeEach(async () => {
      await render(
        <AppContextProvider>
          <Pagination></Pagination>
        </AppContextProvider>
      );
    });

    test('It should be in the document', () => {
      const element = screen.getAllByRole('button')[0];
      expect(element).toBeInTheDocument();
    });
    test('It should call handlePrevious', async () => {
      const element = screen.getAllByRole('button')[0];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(handlePrevious).toHaveBeenCalled();
    });
    test('It should call handleNext', async () => {
      const element = screen.getAllByRole('button')[1];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(handleNext).toHaveBeenCalled();
    });
  });
});
