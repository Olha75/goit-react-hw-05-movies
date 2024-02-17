import axios from 'axios';

const API_KEY = '0254d5a3dced2c998ec5b5a910260705';
const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU0ZDVhM2RjZWQyYzk5OGVjNWI1YTkxMDI2MDcwNSIsInN1YiI6IjY1YzIyNWZhZmM1ZjA2MDE2OGM1MWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kpcuKWuntdsHi3r1Ec93wMxxOlDyIbChH1PpNf_-gY';
// const accept= 'application/json';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: API_KEY, bearer: BEARER_TOKEN },
});

export const getTrendingMovies = async () => {
  return instance.get('/trending/movie/day', {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
};

export const getTrendingByQuery = query => {
  const options = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    params: {
      query: query,
    },
  };
  return instance.get('/search/movie', options);
};

export const getMovieById = movie_id => {
  return instance.get(
    `/movie/${movie_id}`,
    {
      params: {
        api_key: API_KEY,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );
};

export const getCastById = movie_id => {
  return instance.get(`/movie/${movie_id}/credits`, {
    params: {
      api_key: API_KEY,
    },
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
};

export const getReviewsById = movie_id => {
  return instance.get(
    `/movie/${movie_id}/reviews`,
    {
      params: {
        api_key: API_KEY,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );
};
