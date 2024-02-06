import { Link } from 'react-router-dom';
import css from './mainMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={css.menu}>
      <li>
        <Link className={css.link} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={css.link} to="/movies">
          Movies
        </Link>
      </li>
      <li>
        <Link className={css.link} to="/movies/:movieId">
          MovieDetails
        </Link>
      </li>
      <li>
        <Link className={css.link} to="/movies/:movieId/cast">
          Cast
        </Link>
      </li>
      <li>
        <Link className={css.link} to="/movies/:movieId/reviews">
          Reviews
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
