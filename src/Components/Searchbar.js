import { ArrowRight } from "react-bootstrap-icons";

const Searchbar = () => {
  const handleClick = () => {
    
  }
  return (
    <div id="search-area">
      <input id="header-search" type="text" placeholder="Enter Keywords..." />
      <button id="header-search-btn">
        <span id="header-icon">
          {" "}
          <ArrowRight onClick={handleClick}>search</ArrowRight>
        </span>
      </button>
    </div>
  );
};

export default Searchbar;
