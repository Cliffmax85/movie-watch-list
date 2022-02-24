import React from 'react';
import Movie from './Movie';
import WatchListItem from './WatchListItem';
import { useLocation } from 'react-router-dom';

export default function MovieList({ movies, fetchWatchlist, onWatchList }) {
  const location = useLocation();
  
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => location.pathname.includes('search')
          ? <Movie key={`${movie.title}-${i}`} movie={movie} onWatchList={onWatchList} fetchWatchList={fetchWatchlist} /> : <WatchListItem key={`${movie.title}-${i}`} fetchWatchList={fetchWatchlist} movie={movie} />)
      }
    </div>
  );
}
