import React from 'react';
import '../anon.css';

function MovieBox() {
  return (
    <div className='flw-item'>
      <div className='film-poster'>
        <div className='pick film-poster-quality'>HD</div>
        <img
          className='film-poster-img lazyloaded'
          alt='movieimg'
          src='https://via.placeholder.com/100'></img>
        <a
          href='#movielink'
          title='Movie.title'
          className='film-poster-ahref flw-item-tip'>
          <i className='bi bi-play'></i>
        </a>
      </div>
      <div className='film-detail film-detail-fix'>
        <h3 className='film-name'>
          <a
            href='#movielink'
            title='movie.title'>
            Movie Title
          </a>
        </h3>
        <div className='fd-infor'>
          <span className='fdi-item'>year</span>
          <span className='dot'></span>
          <span className='fdi-item fdi-duration'>time</span>
          <span className='float-right fdi-type'>(series/movie)</span>
        </div>
      </div>
      <div className='clearfix'></div>
    </div>
  );
}

export default MovieBox;
