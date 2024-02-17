import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getTrendingByQuery } from '../../api/api';
import Loader from 'components/Loader/Loader';
import css from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') || '';

    if (!query) {
      setError(null);
      setMovies([]);
      return;
    }

    const fetchGetTrendingQuery = async query => {
      try {
        setLoading(true);
        const response = await getTrendingByQuery(query);
        if (response.data.results.length === 0) {
          setError('Вибачте, за вашим запитом відео не знайдено');
          setMovies([]);
        } else {
          setError(null);
          setMovies(response.data.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGetTrendingQuery(query);
  }, [searchParams]);

  const onFormSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');

    if (!query) {
      setError();
      return;
    }

    setSearchParams({ query });
    // try {
    //   setLoading(true);
    //   const response = await getTrendingByQuery(query);
    //   if (response.data.results.length === 0) {
    //     setError('Вибачте, за вашим запитом відео не знайдено');
    //   } else {
    //     setMovies(response.data.results);
    //   }
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className={css.movie_wrapper}>
      <div className={css.forma_movies}>
        <form className={css.searchForm} onSubmit={onFormSubmit}>
          <div>
            <label>
              <input
                className={css.searchFormInput}
                type="text"
                name="search"
                placeholder="Введіть слово"
                autoFocus
              />
            </label>
          </div>
          <button className={css.searchFormButton} type="submit">
            Пошук
          </button>
        </form>
        {loading && <Loader />}
        {error && <p className={css.error}>{error}</p>}
      </div>
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
    </div>
  );
};

export default Movies;
