import React from 'react';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import CastPage from '../CastPage/CastPage'; // Змінено шлях імпорту

const MovieDetailsPage = () => {
  return (
    <div>
      <MovieDetails />
      <CastPage />
    </div>
  );
};

export default MovieDetailsPage;
