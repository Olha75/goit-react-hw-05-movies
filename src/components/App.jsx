import MainMenu from './MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'page/HomePage/HomePage';
import MoviesPage from 'page/MoviesPage/MoviesPage';
import MovieDetailsPage from 'page/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'page/CastPage/CastPage';
import ReviewsPage from 'page/ReviewsPage/ReviewsPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <MainMenu />
      <Routes>
        <Route path="/" element={HomePage}></Route>
        <Route path="/movies" element={MoviesPage}></Route>
        <Route path="/movies/:movieId" element={MovieDetailsPage}></Route>
        <Route path="/movies/:movieId/cast" element={CastPage}></Route>
        <Route path="/movies/:movieId/reviews" element={ReviewsPage}></Route>
      </Routes>
    </div>
  );
};

// 0254d5a3dced2c998ec5b5a910260705
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU0ZDVhM2RjZWQyYzk5OGVjNWI1YTkxMDI2MDcwNSIsInN1YiI6IjY1YzIyNWZhZmM1ZjA2MDE2OGM1MWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kpcuKWuntdsHi3r1Ec93wMxxOlDyIbChH1PpNf_-gY
