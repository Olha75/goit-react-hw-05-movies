import MainMenu from './MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import MoviesPage from 'page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'page/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'page/CastPage/CastPage';
import ReviewsPage from 'page/ReviewsPage/ReviewsPage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';
import SharedLayout from './SharedLayout/SharedLayout';
import SinglePostPage from 'page/SinglePostPage/SinglePostPage';
import MovieSearchPage from 'page/MovieSearchPage/MovieSearchPage';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="movies/" element={<MoviesPage />} /> */}
          <Route path="movies/:id" element={<SinglePostPage />} />
          {/* <Route path="movies/:id" element={<MovieSearchPage />} /> */}
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="movies/:movieId/cast" element={<CastPage />} />
          <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
