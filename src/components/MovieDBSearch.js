import React, { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce';

import MovieService from '../service/movie';
import MovieDBSearchList from './MovieDBSearchList';

const MovieDBSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [unWatchedmovie, setUnWatchedMovie] = useState({});
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const emitMovieKeywordChangeDebounced = debounce(emitMovieKeywordChange, 250);
    return function cleanup() {
      emitMovieKeywordChangeDebounced.cancel();
    }
  }, []);

  const emitMovieKeywordChange = useCallback((e) => {
    setKeyword(e.target.value);
    getData();
  }, []);

  const getData = useCallback(async () => {
    try {
      const data = await MovieService.get('');
      let movs = [];
      const mov = {
        id: data.data.id,
        original_title: data.data.original_title,
        poster_path: data.data.poster_path,
        year: data.data.release_date.split('-')[0],
        runtime: data.data.runtime,
        imdb_score: data.data.vote_average
      }
      movs.push(mov);
      movs.push(mov);
      movs.push(mov);
      movs.push(mov);
      movs.push(mov);
      setSearchMovies(movs);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }, []);

  const addUnWatchedMovie = useCallback(() => {

  }, []);

  return (
    <div className="search-holder">add
      <div className="container">
        <div className="input-field">
          <i className="fas fa-search"></i>
          <div className="input-list">
            <input type="text" id="db-search" placeholder="Search MovieDB" value={keyword} onChange={emitMovieKeywordChange} />
            {
              searchMovies &&
              <MovieDBSearchList searchMovies={searchMovies} />
            }
          </div>
          <button type="submit" onClick={addUnWatchedMovie}>
            <span className="h-mobile">Add to Unwatched</span>
            <span className="h-desktop">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default MovieDBSearch;