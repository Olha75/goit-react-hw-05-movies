import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'api/api';
import Loader from '../../Loader/Loader';
// import css from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsById = async () => {
      try {
        setLoading(true);
        const reviewsResponce = await getReviewsById(movieId);
        setReviews(reviewsResponce.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewsById();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ol>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No reviews available</p>
      )}
    </>
  );
};
export default Reviews;
