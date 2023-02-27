import React from 'react';
import '../App.css';

function MoviesCards() {
  return (
    <div className=''>
      <div className='movie-card'>
        <div>
          <p>movie.Year</p>
        </div>
        <div>
          <img
            src='https://via.placeholder.com/250x300?text=Each+Movie+Picture+Will+Be+Here'
            alt='movie.Title'
          />
        </div>
        <div>
          <span>movie.Type</span>
          <h3>movie.Title</h3>
        </div>
      </div>
    </div>
  );
}

export default MoviesCards;
