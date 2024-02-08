import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostById } from '../../api/api';
import Loader from '../Loader/Loader';
// import css from './single-post-movie.module.css';

const SinglePostMovie = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getPostById(id);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPostMovie();
  }, []);

  const goBack = () => navigate(-1);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error} </p>}
      <button onClick={goBack} type="button">
        Go back
      </button>
      {movies && (
        <>
          <h2>{movies.title}</h2>
          <p>{movies.body}</p>
        </>
      )}
    </div>
  );
};
export default SinglePostMovie;
