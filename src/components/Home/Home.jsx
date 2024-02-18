import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/api';
import Loader from 'components/Loader/Loader';
import css from './home.module.css';
import MoviesList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        setMovies(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2 className={css.home_title}>Trending movies</h2>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      {Boolean(movies.length) && (
        <MoviesList movies={movies} state={{ from: '/' }} />
      )}
    </div>
  );
};

export default Home;
