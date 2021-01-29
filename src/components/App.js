// import { useCallback, useState } from 'react';

import MovieDBSearch from './MovieDBSearch';
// import MovieSearch from './MovieSerarch';
// import MovieList from './MovieList';

function App() {
  // const [keyword, setKeyword] = useState('');
  // const [isWatchedMovie, setWatchedMovie] = useState(false);

  // const searchKey = useCallback((key) => {
  //   setKeyword(key);
  // }, []);

  // const watchedMovie = useCallback((value) => {
  //   setWatchedMovie(value);
  // }, []);

  return (
    <div className="App">
      <MovieDBSearch />
      {/* <main>
        <div className="container">
          <MovieSearch searchFunction={searchKey} watchedMovie={watchedMovie} watched={isWatchedMovie} />
          <MovieList isWatched={isWatchedMovie} keyword={keyword} />
        </div>
      </main> */}
    </div>
  );
}

export default App;
