import React from "react";
import "../anon.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
import Searchbar from "./Searchbar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, []);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/api/movies?search=${searchQuery}`
        )
        .then((res) => setMovies(res.data))
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <div>
        <div id="header-wrap">
          <h4 id="header-caption">Find Movies, Tv shows and more</h4>
          <Searchbar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <div className="film_list film_list-grid">
        <div className="film_list-wrap">
          <MovieBox />
        </div>
      </div>
    </>
  );
}

export default Home;
