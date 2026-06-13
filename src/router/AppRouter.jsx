import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { movieDetailsLoader, moviesLoader } from './loaders/movieLoader.js';

import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home/Home.jsx';
import Movies from '../pages/Movies/Movies.jsx';
import MoviesDetails from '../pages/MovieDetails/MoviesDetails.jsx';
import About from '../pages/About/About.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'movies',
                element: <Movies />,
                loader: moviesLoader,
            },
            {
                path: 'movies/:id',
                element: <MoviesDetails />,
                loader: movieDetailsLoader,
                errorElement: <ErrorMessage message={"Error fetching movie"} />
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />
}