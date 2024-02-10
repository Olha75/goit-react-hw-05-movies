import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/api';
import Loader from 'components/Loader/Loader';

import css from './movie-search.module.css';

const MovieSearch = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(search, page);
        setMovies(prevMovies =>
          data?.length ? [...prevMovies, ...data] : prevMovies
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search, page, location]);

  const handleSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
    setPage(1); // Reset page to 1 when searching
    setMovies([]); // Clear previous search results
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}

      <form className={css.searchForm} onSubmit={handleSearch}>
        <div>
          <label>
            <input
              className={css.searchFormInput}
              value={search}
              onChange={handleSearch}
              required
              type="text"
              name="search"
              placeholder="Enter a search term"
              autoFocus
            />
          </label>
        </div>
        <button className={css.searchFormButton} type="submit">
          Search
        </button>
      </form>
      <ol>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default MovieSearch;
