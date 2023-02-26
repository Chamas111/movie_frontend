import { Link } from "react-router-dom"
import { Person } from "react-bootstrap-icons";

import logo from "./logo.png"
const Nav = () => {
  return (
    <>
    
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
      <button id="main-btn"><Person /> Login</button>
      
    
   
    </>
  )
}

export default Nav