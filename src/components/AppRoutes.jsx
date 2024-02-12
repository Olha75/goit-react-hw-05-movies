import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../page/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../page/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('../page/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../page/ReviewsPage/ReviewsPage'));
const NotFoundPage = lazy(() => import('../page/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="credits" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
