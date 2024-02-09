import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getCastMuviesById } from "../../../api/api";
import Loader from '../../Loader/Loader';
import css from './cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

        const { id } = useParams();
   
    
    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoading(true);
                const { data } = await getCastMuviesById(id);
                setCast(data);
            } catch (error) {
                setError(error.message);
                
            } finally {
                setLoading(false);
                
            }
        } fetchCast()
    }, []);
   
    const elements = cast.map(({ id, body }) => <li key={id}>
        <p>{body}</p>
   </li>)

    const isCast = Boolean(cast.length);

    return (
        <>
            {loading && <Loader />}
            {error && <p>{ error }</p>}
            {isCast && <ol>{elements}</ol>}
        </>
    )
};

export default Cast;