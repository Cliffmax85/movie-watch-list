import React from 'react'
import { addToWatchList } from './services/fetch-utils';

export default function Movie({ movie, onWatchList, fetchWatchList }) {
  const viewed = onWatchList(movie.id);

  async function handleClick() {
    if (!viewed) {
      const saveMovie = {
        title: movie.title,
        api_id: movie.id,
        description: movie.overview,
        poster: movie.poster_path,
      };
      
    await addToWatchList(saveMovie);
    await fetchWatchList();
    }  
  }
  return (
    <div onClick={handleClick} className={`movie-item ${viewed} ? 'watched' : ''}` }>
      <p>{viewed && '🔭'}</p>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <h2>{movie.overview}</h2>
    </div>
  );
}
