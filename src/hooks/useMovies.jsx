import { useState, useEffect } from 'react';

export const API_KEY = import.meta.env.VITE_API_KEY;

function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    //Controller for clean up data fetching
    callback?.();

    const controller = new AbortController();

    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal } //controller cleanup
        );

        if (!res.ok) throw new Error('Something went wrong');

        const data = await res.json();
        // console.log(data);
        if (data.Response === 'False') throw new Error('Movie not found');
        setMovies(data.Search);
        setError('');
      } catch (error) {
        // console.error(error.message);
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }
    // handleCloseMovie();
    fetchMovie();

    //Cleanup Function data fetching
    return () => {
      controller.abort();
    };
  }, [query]);

  return {
    movies,
    isLoading,
    error,
    API_KEY,
  };
}

export default useMovies;
