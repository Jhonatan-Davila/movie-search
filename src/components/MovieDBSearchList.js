import React, { useCallback } from 'react';

const MovieDBSearchList = ({searchMovies}) => {
  const handleClick = useCallback((e, index) => {
    console.log(index);
  }, []);

  return (
    <div className="list-field">
      <ul> 
      {
        searchMovies.map((item, index) => (
          <li key={index}>
            <span>{item.original_title}</span>
            <input type="checkbox" onClick={(index) => handleClick(index)}></input>
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default MovieDBSearchList;