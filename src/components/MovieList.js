import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { convertWatchToUnWatch, convertUnWatchToWatch } from '../store/movie.action'

const MovieList = ({ isWatched, keyword }) => {
  const [shMovies, setShMovies] = useState({})
  const dispatch = useDispatch();
  const movies = useSelector(db => isWatched ? db.movie.watchedMovies : db.movie.unWatchedMovies)

  useEffect(() => {
    setShMovies(movies.filter(item => item.title.include(keyword)))
  }, [keyword, movies])

  const handleChkMovie = useCallback((e, id) => {
    if (isWatched) {
      dispatch(convertUnWatchToWatch(id))
    } else {
      dispatch(convertWatchToUnWatch(id))
    }
  }, [])

  return (
    <div className="results-holder">
      <div className="result">
        <div className="ttl-holder">
          <i className="fas fa-chevron-right"></i>
          <h3>Gladiator</h3>
        </div>
        <div className="content-holder">
          <div className="image-holder">
            <img src="./thumbnail.png" alt="thumbnail" />
          </div>
          <div className="meta-holder">
            <p>Year: 2008</p>
            <p>Runtime: 137m</p>
            <p>IMDB Score: 6.9</p>
            <div className="input-field">
              <input type="checkbox" name="data_0" id="data_0" />
              <label for="data_0">Watched</label>
            </div>
          </div>
        </div>
      </div>
      <div className="result active">
        <div className="ttl-holder">
          <i className="fas fa-chevron-right"></i>
          <h3>Braveheart</h3>
        </div>
        <div className="content-holder">
          <div className="image-holder">
            <img src="./thumbnail.png" alt="thumbnail" />
          </div>
          <div className="meta-holder">
            <p>Year: 2008</p>
            <p>Runtime: 137m</p>
            <p>IMDB Score: 6.9</p>
            <div className="input-field">
              <input type="checkbox" name="data_1" id="data_1" />
              <label for="data_1">Watched</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  {/* <div>
          {
            shMovies &&
            shMovies.map((item, idx) => (
              <div key={item.id}>
                <div>
                  {item.title}
                </div>
                <div>
                  <img src={item.src} />
                  <div>
                    <span>{item.year}</span>
                    <span>{item.runtime}</span>
                    <span>{item.score}</span>
                    <input type="checkbox" name={isWatched ? "watched" : "unwatched"} onClick={(e) => handleChkMovie(e, idx)}></input>
                  </div>
                </div>
              </div >
            ))
          }
        </div> */}
}

export default MovieList;