import * as React from 'react';
import {
  Link
} from "react-router-dom";
import CreateProfile from '../../pages/CreateProfilePage/CreateProfile';
import "../HeaderComponent/Header.scss"


function Header () {
  return (
       <div className="header">
          <nav>
            <figure>
                <img src="logo.JPG" alt="logo"></img>
            </figure>
            <p>ENDAVA</p>
            <ul>
              <li>
                <Link to="/profiles">View Profiles</Link>
              </li>
              <li>
                <CreateProfile/>
              </li>
            </ul>
            <p>MARIA RODRIGUEZ</p>
            <figure>
              <img src="logout.JPG" alt="logout"/>
            </figure> 
          </nav>
        </div>   
  );
}

export default Header
