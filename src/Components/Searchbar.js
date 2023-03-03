import { ArrowRight } from "react-bootstrap-icons";

const Searchbar = (props) => {
  return (
    <div id="search-area">
      <input
        id="header-search"
        type="text"
        placeholder="Enter Keywords..."
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />

      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Searchbar;
