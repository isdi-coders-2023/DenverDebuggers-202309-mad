import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home/home'));
const Details = lazy(() => import('../../pages/details/details'));
const FavoriteDetails = lazy(
  () => import('../../pages/favorite.details/favorite.details')
);
const ErrorPage = lazy(() => import('../../pages/error/error'));
const Favorites = lazy(() => import('../../pages/favorites/favorites'));
const FormCreate = lazy(() => import('../../pages/create.form/create.form'));
const FormModify = lazy(() => import('../../pages/modify.form/modify.form'));
export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          <Route
            path="/create.form"
            element={<FormCreate></FormCreate>}
          ></Route>
          <Route
            path="/modify.form/:id"
            element={<FormModify></FormModify>}
          ></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route
            path="/details.favorite/:id"
            element={<FavoriteDetails></FavoriteDetails>}
          ></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
