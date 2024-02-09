import { lazy } from 'react';
import MainMenu from './MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./page/MoviesPage/MoviesPage'));
const MovieDetailsPage = Lazy(() => import('./Page/MovieDetailsPage'));
const CastPage = lazy(() => import('./page/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./page/ReviewsPage/ReviewsPage'));
const SinglePostPage = lazy(() =>
  import('./page/SinglePostPage/SinglePostPage')
);
const MovieSearchPage = lazy(() =>
  import('./page/MovieSearchPage/MovieSearchPage')
);
const NotFoundPagege = lazy(() => import('./page/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="movies/" element={<MoviesPage />} /> */}
        <Route path="movies/:id" element={<SinglePostPage />} />
        {/* <Route path="movies/:id" element={<MovieSearchPage />} /> */}
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
        </Route>
        {/* <Route path="movies/:movieId/cast" element={<CastPage />} /> */}
        <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
