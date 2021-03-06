import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchListItem({ movie, fetchWatchList }) {
  
  async function handleClick() {
    await watchMovie(movie.id);

    await fetchWatchList();
  }
  return (
    <div onClick={handleClick} className="watchlist-item">
      <p>{movie.watched ? '✓' : '🔭'}</p>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster}`} />
      <h3>{movie.description}</h3>
    </div>
  );
}
