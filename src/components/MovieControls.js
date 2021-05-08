import React, { useContext } from 'react';
import { GlobalContext } from './contex/GlobalState';

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <i className='far fa-bookmark'></i>
          </button>
          <button
            className='ctrl-btn'
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
      {type === 'watched' && (
        <>
          <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
            <i className='fas fa-bookmark'></i>
          </button>

          <button
            className='ctrl-btn'
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  );
};
