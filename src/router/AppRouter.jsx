import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home/Home.jsx';
import Movies from '../pages/Movies/Movies.jsx';
import MoviesDetails from '../pages/MovieDetails/MoviesDetails.jsx';
import About from '../pages/About/About.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/movies/:id' element={<MoviesDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}