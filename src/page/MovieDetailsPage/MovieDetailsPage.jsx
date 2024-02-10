import { Link, Outlet } from 'react-router-dom';

import css from './movie-details-page.module.css';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  return (
    <div>
      <MovieDetails />
    </div>
  );
};

export default MovieDetailsPage;
