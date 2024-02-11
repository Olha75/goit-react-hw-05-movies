import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/api';
import Loader from 'components/Loader/Loader';
import css from './home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        setTrendingMovies(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  const elements = trendingMovies.map(({ id, title }) => (
    <li className={css.home_list_body} key={id}>
      <Link to={`/movies/${id}`} state={{ from: '/' }}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div>
      <h2 className={css.home_title}>Trending movies</h2>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      {Boolean(elements.length) && (
        <ol className={css.home_list}>{elements}</ol>
      )}
    </div>
  );
};

export default Home;
