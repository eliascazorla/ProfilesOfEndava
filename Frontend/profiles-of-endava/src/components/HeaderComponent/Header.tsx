import * as React from 'react';
import "../HeaderComponent/Header.scss"


function Header () {
  return (
    <div className="header">
      <nav>
        <figure>
          <img src="logo.JPG" alt="logo"></img>
        </figure>
        <p>ENDAVA</p>
        <p>MARIA RODRIGUEZ</p>
        <figure>
          <img src="logout.JPG" alt="logout"/>
        </figure>    
      </nav>
    </div>
  );
}

export default Header
