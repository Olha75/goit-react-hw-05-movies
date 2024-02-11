import Cast from '../../components/MovieDetails/Cast/Cast';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const { movieId } = useParams();
  return <Cast movieId={movieId} />;
};

export default CastPage;
