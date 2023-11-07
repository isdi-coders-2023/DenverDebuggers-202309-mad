import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './pagination';
import { userEvent } from '@testing-library/user-event';
import { AppContext, ContextStructure } from '../../context/app.context';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const value: ContextStructure = {
      characterTools: {
        handleNext: jest.fn(),
        handlePrevious: jest.fn(),
      },
    } as unknown as ContextStructure;
    beforeEach(async () => {
      await render(
        <AppContext.Provider value={value}>
          <Pagination></Pagination>
        </AppContext.Provider>
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
      expect(value.characterTools.handlePrevious).toHaveBeenCalled();
    });
    test('It should call handleNext', async () => {
      const element = screen.getAllByRole('button')[1];
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(value.characterTools.handleNext).toHaveBeenCalled();
    });
  });
});
