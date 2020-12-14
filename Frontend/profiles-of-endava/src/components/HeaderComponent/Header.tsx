import * as React from 'react';
import "../HeaderComponent/Header.scss"


function Header () {
  return (
    <div className="header">
      <nav>
        <img src="logo.JPG" alt="logo"></img>
        <p>ENDAVA</p>
        <p>MARIA RODRIGUEZ</p>
        <img src="logout.JPG" alt="logout"/>
      </nav>
    </div>
  );
}

export default Header
