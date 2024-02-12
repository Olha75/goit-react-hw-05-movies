import React, { useState } from 'react';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import CastPage from '../CastPage/CastPage';
import ReviewsPage from 'page/ReviewsPage/ReviewsPage';
import css from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleCastClick = () => {
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowCast(false);
    setShowReviews(true);
  };

  return (
    <div>
      <MovieDetails />
      {/* <div>
        <button className={css.btn_add_in_md} onClick={handleCastClick}>
          Cast
        </button>
        <button className={css.btn_add_in_md} onClick={handleReviewsClick}>
          Reviews
        </button>
      </div> */}
      {showCast && <CastPage />}
      {showReviews && <ReviewsPage />}
    </div>
  );
};

export default MovieDetailsPage;
