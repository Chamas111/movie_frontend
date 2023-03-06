import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../anon.css';

function MovieBox() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <>
          <div
            className='flw-item'
            key={movie.id}>
            <div className='film-poster'>
              <div className='pick film-poster-quality'>HD</div>
              <img
                className='film-poster-img lazyloaded'
                alt='movieimg'
                src={movie.url}></img>
              <Link
                to={`/movies/${movie.movie_id}`}
                className='film-poster-ahref flw-item-tip'>
                <i className='bi bi-play'></i>
              </Link>
            </div>
            <div className='film-detail film-detail-fix'>
              <h3 className='film-name'>
                <a
                  href='#movielink'
                  title='movie.title'>
                  {movie.title}
                </a>
              </h3>
              <div className='fd-infor'>
                <span className='fdi-item'>{movie.year}</span>
                <span className='dot'></span>
                <span className='fdi-item fdi-duration'>
                  {movie.duration} min
                </span>
              </div>
              <div className='fd-infor'>
                <span className='text-start fdi-type'>
                  {movie.genre.replace(/[^\w\s,]/gi, '')}
                </span>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </>
      ))}
    </>
  );
}

export default MovieBox;
