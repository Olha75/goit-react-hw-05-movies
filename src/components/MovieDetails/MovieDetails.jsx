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
import myImage from '../../image/default_no_poster.gif';
import css from './movieDetails.module.css';

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

  // const defaultImg = myImage;
  const goBack = () => navigate(from);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      <button className={css.btn_goBack} onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          <div className={css.all_wrap}>
            <div className={css.md_img_wrapper}>
              {/* <h2 className={css.movie_title}>{movie.title}</h2>
            <p>{movie.overview}</p> */}
              <img
                className={css.img_movie_details}
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : myImage
                }
                alt={'poster'}
              />
            </div>
            <div className={css.text_md_wrapper}>
              <h1 className={css.title_boss}>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h1>
              <p className={css.user_score_md}>
                User score: {(movie.vote_average * 10).toFixed(0)}%
              </p>
              <h2>Overview</h2>
              <p className={css.overview_md}>{movie.overview}</p>
              <h2>Genres</h2>
              <ul className={css.genres_list_md}>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.add_in_md_wrapper}>
            <h2 className={css.ad_in_title}>Additional information</h2>
            <ul className={css.list_add_in_md}>
              <li>
                <Link
                  className={css.btn_add_in_md}
                  to="credits"
                  state={{ from }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  className={css.btn_add_in_md_rew}
                  to="reviews"
                  state={{ from }}
                >
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
