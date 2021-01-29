import React, { useState, useCallback } from 'react'


const MovieSearch = ({ searchFunction, watchedMovie, watched }) => {
  const [keyword, setKeyword] = useState('');
  const handleKeyword = useCallback((e) => {
    const value = e.target.value;
    setKeyword(value);
    searchFunction(value);
  })
  const checkWatchedMovie = useCallback((flag) => {
    watchedMovie(flag)
  }, [])
  return (
    <div className="filter-holder">
      <div className="input-field">
        <input type="text" name="smovie" id="movie-search" placeholder="Search My Movies" value={keyword} onChange={handleKeyword} />
      </div>
      <div className="btn-group">
        <button className={watched ? '' : 'active'} onClick={() => checkWatchedMovie(false)}><i className="fas fa-eye-slash"></i><span>Unwatched</span></button>
        <button className={watched ? 'active' : ''} onClick={() => checkWatchedMovie(true)}><i className="fas fa-eye"></i><span>Watched</span></button>
      </div>
    </div>
  )
}

export default MovieSearch;