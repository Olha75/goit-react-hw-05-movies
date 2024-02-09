import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';
import Loader from 'components/Loader/Loader';


import css from './movie-search.module.css';

const MovieSearch = () => {
    //   const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);
    // const inputRef = useRef(null);


    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');
    const page = searchParams.get('page');



    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await searchMovies(search, page);
                setMovies(prevMovies => data?.length ? [...prevMovies, ...data])
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (search) {
            fetchMovies();
        }
    }, [search, page]);

    const handleSearch = ({ search }) => {

        setSearchParams({ search, page: 1 });
        setMovies([]);
   
    };

    const LoadMore = () => setSearchParams({ search, page: Number(page) + 1 });
    const isMovies = Boolean(movies.length);

  
    return (
        <>
            {loading && <Loader />}
            {error && <p>Error: {error}</p>}

            <form className={css.searchForm} onSubmit={handleSearch}>
                <div>
                    <label>
                        <input
                            ref={inputRef}
                            className={css.searchFormInput}
                            value={search}
                            onChange={handleChange}
                            required
                            type="text"
                            name="search"
                            placeholder="Введіть слово"
                            autoFocus
                        />
                    </label>
                </div>
                <button className={css.searchFormButton} type="submit">
                    Пошук
                </button>
            </form>
            <ol>
                {movies.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))}
            </ol>
        </>
    );
}
export default MovieSearch;
