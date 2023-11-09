import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home/home'));
const Details = lazy(() => import('../../pages/details/details'));
const Error = lazy(() => import('../../pages/error/error'));
export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
