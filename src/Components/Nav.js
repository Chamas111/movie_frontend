import { Link } from "react-router-dom"
import logo from "./logo.png"
const Nav = () => {
  return (
    <div id="header-wrap">
    <header id="main-header">
      <img id="main-logo" src={logo} alt="logo" />
      <nav id="main-nav">
      <Link to="/">Home</Link>
      <Link to="/">Genre</Link>
      <Link to="/">Country</Link>
      <Link to="/">Movies</Link>
      <Link to="/">Tv Shows</Link>
      <Link to="/">Top IMDB</Link>
      <Link to="/">Android APP</Link>
      </nav>
      <button id="main-btn">Login</button>
    </header>
    <h4 id="header-caption">Find Movies, Tv shows and more</h4>
    </div>
  )
}

export default Nav