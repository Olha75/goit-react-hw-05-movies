import MainMenu from './MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import MoviesPage from 'page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'page/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'page/CastPage/CastPage';
import ReviewsPage from 'page/ReviewsPage/ReviewsPage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';
// import SinglePostPage from 'page/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};

// 0254d5a3dced2c998ec5b5a910260705
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU0ZDVhM2RjZWQyYzk5OGVjNWI1YTkxMDI2MDcwNSIsInN1YiI6IjY1YzIyNWZhZmM1ZjA2MDE2OGM1MWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kpcuKWuntdsHi3r1Ec93wMxxOlDyIbChH1PpNf_-gY
