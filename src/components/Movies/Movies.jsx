import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getTrendingByQuery } from '../../api/api';
import Loader from 'components/Loader/Loader';
import css from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';

    const fetchGetTrendingQuery = async query => {
      try {
        setLoading(true);
        const response = await getTrendingByQuery(query);
        if (response.data.results.length === 0) {
          setError('Вибачте, за вашим запитом відео не знайдено');
        } else {
          setMovies(response.data.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGetTrendingQuery(query);
  }, [location.search]);

  const onFormSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');

    if (!query) {
      setError('Введіть слово для пошуку');
      return;
    }

    try {
      setLoading(true);
      const response = await getTrendingByQuery(query);
      if (response.data.results.length === 0) {
        setError('Вибачте, за вашим запитом відео не знайдено');
      } else {
        setMovies(response.data.results);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className={css.header}>
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
      {error && <p>{error}</p>}
      <ol>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ol>
    </header>
  );
};

export default Movies;
