import * as React from 'react';
import "../SearchBoxComponent/SearchBox.scss"

function SearchBox () {
  return (
    <div className="searchBox">
        <input type="search" placeholder="Search Profile" />
    </div>
  );
}

export default SearchBox
