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
        console.log(data);
        setTrendingMovies(data.results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  const elements = trendingMovies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));
  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      {Boolean(elements.length) && <ol>{elements}</ol>}
    </div>
  );
};

export default Home;
