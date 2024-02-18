import { Link, useLocation } from 'react-router-dom';
import css from './movieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol className={css.movie_list}>
      {movies.map(({ id, title }) => (
        <li className={css.movie_list_body} key={id}>
          <Link
            className={css.movie_link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default MoviesList;
