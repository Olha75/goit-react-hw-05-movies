import { NavLink } from 'react-router-dom';
import css from './mainMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
