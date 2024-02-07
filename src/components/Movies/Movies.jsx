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
//   const [value, setValue] = useState();

//   useEffect(() => {
//     const query = useParams.get(query);

//     const fetchGetTrendingQuery = async query => {
//       try {
//         setLoading(true);
//         const response = await getTrendingQuery(query);
//         setMovies(response.data.results?.length === 0);
//         {
//           setValue('');
//           alert('Вибачте, за вашим запитом відео не знайдено');
//         }
//         setMovies(response.data.results);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchGetTrendingQuery();
//   }, [useParams]);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(search);
//     setSearch('');
//   };

//   return (
//     <header className={css.header}>
//       <form className={css.searchForm} onSubmit={handleSubmit}>
//         <div>
//           <label>
//             <input
//               ref={inputRef}
//               className={css.searchFormInput}
//               value={value}
//               onChange={e => setValue(e.target.value)}
//               required
//               type="text"
//               name="search"
//               placeholder="Введіть слово"
//               autoFocus
//             />
//           </label>
//         </div>
//         <button className={css.searchFormButton} type="submit">
//           Пошук
//         </button>
//       </form>
//       <li></li>
//     </header>
//   );
// };

// export default Movies;

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

//  const handleChange = e => {
//    const { value } = e.target;
//    setSearch(value);
//  };
