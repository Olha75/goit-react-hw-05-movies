// import css from './reviews-page.module.css';
import Reviews from '../../components/MovieDetails/Reviews/Reviews';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const { movieId } = useParams();
  return <Reviews movieId={movieId} />;
};

export default ReviewsPage;
