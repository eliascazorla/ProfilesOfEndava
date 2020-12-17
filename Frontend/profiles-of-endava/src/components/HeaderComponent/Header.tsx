import * as React from 'react';
import {
  Link
} from "react-router-dom";
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
                <Link to="/profiles" className="active" onClick={e => e}>View Profiles</Link>
              </li>
              <li>
                <Link to="/createProfile">Create Profile</Link>
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
