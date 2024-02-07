import Movies from 'components/Movies/Movies';
import SearchBar from '../../components/SearchBar/SearchBar';

import css from './movies-pages.module.css';

const MoviesPage = () => {
  return (
    <>
      <Movies />
      <SearchBar />
    </>
  );
};

export default MoviesPage;
