import { ArrowRight } from "react-bootstrap-icons";

const Searchbar = () => {
  return (
    <div id="search-area">
      <input id="header-search" type="text" placeholder="Enter Keywords..." />
      <button id="header-search-btn">
        <span id="header-icon">
          {" "}
          <ArrowRight size={20} />{" "}
        </span>
      </button>
    </div>
  );
};

export default Searchbar;
