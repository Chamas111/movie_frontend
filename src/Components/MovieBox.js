import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../anon.css";
import play from "../images/play.svg"

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
          <div className="flw-item" key={movie.id}>
            <div className="film-poster">
              <div className="pick film-poster-quality">HD</div>
              <img
                className="film-poster-img lazyloaded"
                alt="movieimg"
                src={movie.url}
              ></img>
              <Link
                to={`/movies/${movie.movie_id}`}
                className="film-poster-ahref flw-item-tip"
              >
               <div className="fi fi-play">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg>
               </div>
              </Link>
            </div>
            <div className="film-detail film-detail-fix">
              <h3 className="film-name">
                <a href="#movielink" title="movie.title">
                  {movie.title}
                </a>
              </h3>
              <div className="fd-infor">
                <span className="fdi-item">{movie.year}</span>
                <span className="dot"></span>
                <span className="fdi-item fdi-duration">
                  {movie.duration} min
                </span>
          
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </>
      ))}
    </>
  );
}

export default MovieBox;
