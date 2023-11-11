import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';

describe('Given AppRoutes component', () => {
  describe('When we navigate to Home page', () => {
    const MockedHomeComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock('../../pages/home/home', () => MockedHomeComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Home');
    });
    test('Then the component should been called', () => {
      expect(MockedHomeComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to favorites page', () => {
    const MockedFavoritesComponent = jest
      .fn()
      .mockReturnValue(<p>Favorites</p>);
    jest.mock(
      '../../pages/favorites/favorites',
      () => MockedFavoritesComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/favorites']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Favorites');
    });
    test('Then the component should been called', () => {
      expect(MockedFavoritesComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to create form page', () => {
    const MockedCreateComponent = jest.fn().mockReturnValue(<p>Create</p>);
    jest.mock(
      '../../pages/create.form/create.form',
      () => MockedCreateComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/create.form/id']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Create');
    });
    test('Then the component should been called', () => {
      expect(MockedCreateComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we navigate to Details page ', () => {
    const MockedDetailsComponent = jest.fn().mockReturnValue(<p>Homer</p>);
    jest.mock('../../pages/details/details', () => MockedDetailsComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/details/:id']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Homer');
    });
    test('Then the component should been called', () => {
      expect(MockedDetailsComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to Favorite Details page ', () => {
    const MockedFavoriteDetailsComponent = jest
      .fn()
      .mockReturnValue(<p>Homer</p>);
    jest.mock(
      '../../pages/favorite.details/favorite.details',
      () => MockedFavoriteDetailsComponent
    );
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter
            initialEntries={['/details.favorite/:id']}
            initialIndex={0}
          >
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Homer');
    });
    test('Then the component should been called', () => {
      expect(MockedFavoriteDetailsComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
  describe('When we navigate to Error page ', () => {
    const MockedErrorComponent = jest.fn().mockReturnValue(<p>Error</p>);
    jest.mock('../../pages/error/error', () => MockedErrorComponent);
    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <MemoryRouter initialEntries={['/error']} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </MemoryRouter>
        );
      });
      element = screen.getByText('Error');
    });
    test('Then the component should been called', () => {
      expect(MockedErrorComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
