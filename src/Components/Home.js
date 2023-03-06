import React from 'react';
import '../anon.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import Newrelease from './Newrelease';
import Classics from './Classics';
import Kids from './Kids';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/movies?search=${searchQuery}`
      )
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  };

  const filteredMovies =
    searchQuery.length > 0
      ? movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 24)
      : movies.slice(0, 24);

  return (
    <>
      <div>
        <div id='header-wrap'>
          <h4 id='header-caption'>Find Movies, Tv shows and more</h4>
          <Searchbar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      {filteredMovies?.length > 0 && (
        <div className='film_list film_list-grid'>
          <div className='film_list-wrap'>
            {filteredMovies.map((movie) => (
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
            ))}
          </div>
        </div>
      )}
      <Newrelease />
      <Classics />
      <Kids />
    </>
  );
}

export default Home;
