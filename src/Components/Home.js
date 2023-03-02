import React from "react";
import "../anon.css";
import Header from "./Header";
import MovieBox from "./MovieBox";
import Searchbar from "./Searchbar";

function Home() {
  return (
    <>
      <div>
        <div id="header-wrap">
          <h4 id="header-caption">Find Movies, Tv shows and more</h4>
          <Searchbar />
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
