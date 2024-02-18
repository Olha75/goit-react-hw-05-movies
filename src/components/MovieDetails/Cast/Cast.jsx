import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../../api/api';
import Loader from '../../Loader/Loader';
import myImage from '../../../image/default_no_actor_1.jpg';
import css from './cast.module.css';

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

  const isCast = Boolean(cast.length);

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {isCast && cast.length > 0 ? (
        <ul className={css.cast_list}>
          {cast.map(({ id, original_name, profile_path }) => (
            <li className={css.cast_items} key={id}>
              <img
                className={css.img_cast}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : myImage
                }
                alt={'foto_actor'}
              />
              <p>{original_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.no_text_cast}>Sorry, no cast available</p>
      )}
    </>
  );
};

export default Cast;
