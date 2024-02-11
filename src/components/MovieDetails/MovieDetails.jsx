import React, { useState, useEffect, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMovieById } from '../../api/api';
import Loader from '../Loader/Loader';
// import Cast from './Cast/Cast';

// import css from './movieDetails.module.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieResponse = await getMovieById(movieId);
        setMovie(movieResponse.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const goBack = () => navigate(from);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      <button onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {movie.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
            />
          ) : (
            <img src={defaultImg} alt="poster" />
          )}
          <div>
            <h1>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h1>
            <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="credits" state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from }}>
                  Reviews
                </Link>
              </li>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
