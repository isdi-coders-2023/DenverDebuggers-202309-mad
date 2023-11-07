import { List } from '../list/list';
import './app.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Pagination } from '../pagination/pagination';

export function App() {
  return (
    <div>
      <Header></Header>
      <List></List>
      <Pagination></Pagination>
      <Footer></Footer>
    </div>
  );
}
