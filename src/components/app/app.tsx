import { List } from '../list/list';
import './app.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function App() {

  return (
    <div>
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </div>
  );
}
