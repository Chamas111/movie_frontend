import React from 'react';
import '../anon.css';
import MovieBox from './MovieBox';

function Home() {
  return (
    <div className='film_list film_list-grid'>
      <div className='film_list-wrap'>
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
        <MovieBox />
      </div>
    </div>
  );
}

export default Home;
