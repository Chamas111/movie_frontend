import React from "react";
import "./Footer.css";
import logo from "./../images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = ({ handleHome, scrollToTop }) => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row justify-content-space-around">
          <div className="col">
            <img
              src={logo}
              width="150px"
              align-self="start"
              margin-left="0px"
              padding="0px"
              alt="logo"
            />
            <br />
            <ul className="list-unstyled">
              <p>© HDToday</p>
            </ul>
          </div>

          <div className="col">
            <div className="nav">
              <p>
                HDToday is a Free Movies streaming site with zero ads. We let
                you watch movies online without having to register or pay
                subscription fees. With over 10000 movies and TV-Series, you can
                also download full movies from HDToday AND WATCH IT LATER AT A
                CONVENIENT TIME.
              </p>
            </div>

            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies/new" className="nav-link">
                  Add Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col">
            <div>
              <p>
                HDToday does not store any files on our server. We only link to
                the media server which is hosted on 3rd party services.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row" id="copyright">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} HDToday | All Rights Reserved |
            Terms of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
