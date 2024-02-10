import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../../api/api';
import Loader from '../../Loader/Loader';
// import css from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const castResponse = await getCastById(movieId);
        setCast(castResponse.data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const elements = cast.map(({ id, original_name, profile_path }) => (
    <li key={id}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : defaultImg
        }
        alt={'poster'}
      />
      <p>{original_name}</p>
    </li>
  ));

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const isCast = Boolean(cast.length);

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {isCast && <ol>{elements}</ol>}
    </>
  );
};

export default Cast;
