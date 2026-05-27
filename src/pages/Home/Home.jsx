import { getMovies} from '../../api/moviesApi.js';
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div style={{ fontFamily: 'Roboto Black', fontWeight: 'bold' }}>
            Home

            <span style={{ fontFamily: 'Roboto IHOR'}}>Ihor</span>
        </div>
    )
}