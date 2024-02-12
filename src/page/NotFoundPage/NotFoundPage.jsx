import { Link, Outlet } from 'react-router-dom'; // Заміна Routes та Route на Outlet
import css from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.notFound_wrapper}>
      <h1>Вибачте, цієї сторінки не існує</h1>
      {/* Використовуйте Outlet для відображення посилання */}
      <Outlet />
      <Link className={css.btn_goHome} to="/">
        Повернутися до головної сторінки
      </Link>
    </div>
  );
};

export default NotFoundPage;
