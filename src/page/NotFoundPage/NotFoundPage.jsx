import { Link } from 'react-router-dom';
import css from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Вибачте, цієї сторінки не їснує</h1>
      <Link to="/">Повернутися до головної сторінки</Link>
    </div>
  );
};

export default NotFoundPage;
