import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getTrendingByQuery } from '../../api/api';
import Loader from 'components/Loader/Loader';
import css from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(useSearchParams.get('query' || ''));

  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get(query);

    const fetchGetTrendingQuery = async query => {
      try {
        setLoading(true);
        const response = await getTrendingByQuery(query);
        setMovies(response.data.results?.length === 0);
        if (response.data.results.length === 0) {
          setValue('');
          alert('Вибачте, за вашим запитом відео не знайдено');
        }
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGetTrendingQuery();
  }, [searchParams]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onFormSubmit = async e => {
    e.preventDefault();

    if (!value) {
      alert('Вибачте, за вашим запитом відео не знайдено');
      return;
    }

    try {
      setLoading(true);
      setSearchParams({ query: value });
      const response = await getTrendingByQuery(value);
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //   const handleSubmit = ({ search }) => {
  //     e.preventDefault();
  //     onSubmit(search);
  //     setMovies('');
  //   };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={onFormSubmit}>
        <div>
          <label>
            <input
              ref={inputRef}
              className={css.searchFormInput}
              value={value}
              onChange={e => setValue(e.target.value)}
              required
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
      <ol>
        {loading && <Loader />}
        // {error && <p>Error: {error} </p>}
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

//   const elements = movies.map(({ query }) => (
//     <li key={id}>
//       <Link to={`/movies/${id}`} state={{from:location}}>{title}</Link>
//     </li>
//   ));
//   return (
//     <div>
//       {loading && <Loader />}
//       {error && <p>Error: {error} </p>}
//       {Boolean(elements.length) && <ol>{elements}</ol>}
//       {trendingMovies && (
//         <>
//           <h2>{trendingMovies.title}</h2>
//           <p>{trendingMovies.body}</p>
//         </>
//       )}
//     </div>
//   );
// };

//  const handleChange = e => {
//    const { value } = e.target;
//    setSearch(value);
//  };
