import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/api';
import Loader from 'components/Loader/Loader';
import css from './home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        setTrendingMovies(data?.length ? data : []);
        // setTrendingMovies(data.results || []);
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
      <Link to={`/movies/${id}`} state={{ from: '/' }}>
        {title}
      </Link>
    </li>
  ));
  return (
    <div>
      <h2>Trending movies</h2>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      {Boolean(elements.length) && <ol>{elements}</ol>}
    </div>
  );
};

export default Home;

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     getTrendingMovies().them(data => setTrendingMovies(data));
//   }, []);

//   return (
//     <div>
//       <MoviesList movies={movies} />
/* <h2>Trending movies</h2>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      {Boolean(elements.length) && <ol>{elements}</ol>} */
//     </div>
//   );
// };
