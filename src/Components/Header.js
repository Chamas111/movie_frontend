import React from 'react'
import Nav from './Nav'
import Searchbar from './Searchbar'
const Header = () => {
  return (
    <div id='header-wrap'>
      
      <Nav />
      
      <h4 id="header-caption">Find Movies, Tv shows and more</h4>
      <Searchbar />
    </div>
  )
}

export default Header