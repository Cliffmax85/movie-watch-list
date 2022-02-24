import React from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/fetch-utils';
import { useState, useEffect } from 'react';

export default function WatchListPage() {
  const [movies, setmovies] = useState([]);

  async function fetchWatchList() {
    const data = await getWatchList();
    setmovies(data);

  }

  useEffect(() => {
    fetchWatchList();
      
  }, []);
  return (
    <div>WatchList Page
      <MovieList movies={movies} fetchWatchlist={fetchWatchList} />
    </div>
  );
}
