import { Link, useLocation } from 'react-router-dom';
import css from './movies-list.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));
  return <ol className={css.moviesList}>{elements}</ol>;
};

export default MoviesList;

// import css from './movies-list.module.css';

// const MoviesList = ({ movies }) => {
//   return (
//     <ul className={css.moviesList}>
//       {movies.map(({ id, title }) => (
//         <li key={id}>{title}</li>
//       ))}
//     </ul>
//   );
// };

// export default MoviesList;
