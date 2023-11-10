import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AppRoutes } from '../app.routes/app.routes';

export function App() {
  return (
    <div>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </div>
  );
}
