import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"
import logo from "./../images/logo.png";


const Footer = ({ handleHome, scrollToTop }) => {
  return (
    <div className='main-footer'>
       <div className='container'>
        <div className='row justify-content-space-around'>
             <div className='col'>
                  <img src={logo} width="150px" align-self="start" margin-left="0px" padding="0px" alt="logo" />
                  <br />
                  <ul className='list-unstyled'>
                      <p>© HDToday</p>
                  </ul>
              </div>

              <div className='col' >
                <div className='nav'>
                <p>HDToday is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or pay subscription fees. With over 10000 movies and TV-Series, you can also download full movies from HDToday AND WATCH IT LATER AT A CONVENIENT TIME.</p>
                <div className='list_items'>
                <ul className='nav_links'>
                  <li><a href="/Android App/default.asp" target="_blank">Android App</a></li>
                  <li><a href="/Terms of Services/default.asp" target="_blank">Terms of Services</a></li>
                  <li><a href="/Contact/default.asp" target="_blank">Contact</a></li>
                  <li><a href="/Sitemap/default.asp" target="_blank">Sitemap</a></li>
                </ul>
                </div>
                </div>
              </div>
              
            
             
              <div className='col'>
                <div>
                  <p>HDToday does not store any files on our server. We only link to the media server which is hosted on 3rd party services.</p>
                </div>
              </div>

        </div>
        <hr />
        <div className='row' id='copyright'>
          <p className='col-sm'>
              &copy;{new Date().getFullYear()} HDToday | All Rights Reserved | Terms of Services | Privacy
          </p>

        </div>

      </div>
    </div>
  )
}

export default Footer