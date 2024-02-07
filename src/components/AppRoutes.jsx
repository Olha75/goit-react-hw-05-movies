import MainMenu from './MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import MoviesPage from 'page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'page/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'page/CastPage/CastPage';
import ReviewsPage from 'page/ReviewsPage/ReviewsPage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';
// import SinglePostPage from 'page/SinglePostPage/SinglePostPage';

const AppRoutes = () => {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<CastPage />} />
        <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path='/movies/:id' element={<SinglePostPage/>} /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
