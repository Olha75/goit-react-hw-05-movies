import ErrorBoundary from 'components/ErrorBoundary';
import Movies from 'components/Movies/Movies';

// import css from './movies-pages.module.css';

const MoviesPage = () => {
  return (
    <ErrorBoundary>
      <Movies />
    </ErrorBoundary>
  );
};

export default MoviesPage;
