import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getWatchList, searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const data = await searchMovies(search);

    setMovies(data);
  }

  async function fetchWatchList() {
    
    const data = await getWatchList();
    setWatchList(data);

  }

  function onWatchList(api_id) {
    const match = watchList.find(movie => Number(movie.api_id) === Number(api_id));

    return Boolean(match);
  } 

  useEffect(() => {
    fetchWatchList();
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button>Search Movies</button>
      </form>
      <section>
        <MovieList movies={movies} onWatchList={onWatchList} fetchWatchlist={fetchWatchList} />
      </section>
    </div>
  );
}
