// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getTrendingQuery } from '../../api/api';
// import Loader from 'components/Loader/Loader';
// import css from './home.module.css';

// const Movies = () => {
//   const [movies, setMovies] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { query } = useParams();

//   useEffect(() => {
//     const fetchGetTrendingQuery = async query => {
//       try {
//         setLoading(true);
//         const { data } = await getTrendingQuery(query);
//         setMovies(data.results?.length ? data.results : []);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchGetTrendingQuery();
//   }, []);

//   const elements = movies.map(({ query }) => (
//     <li key={id}>
//       <Link to={`/movies/${id}`}>{title}</Link>
//     </li>
//   ));
//   return (
//     <div>
//       {loading && <Loader />}
//       {error && <p>Error: {error} </p>}
//       {Boolean(elements.length) && <ol>{elements}</ol>}
//       {trendingMovies && (
//         <>
//           <h2>{trendingMovies.title}</h2>
//           <p>{trendingMovies.body}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Movies;
