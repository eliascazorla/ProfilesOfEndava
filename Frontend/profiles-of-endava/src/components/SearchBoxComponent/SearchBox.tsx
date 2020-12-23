import * as React from 'react';
import "../SearchBoxComponent/SearchBox.scss"
import {useState} from "react"
import SearchIcon from "@material-ui/icons/Search"

interface SearchBoxProps{
  profilesByFilter?:any;
}

function SearchBox (props: SearchBoxProps) {

  const [filter, setFilter] = useState("");

  const handleKeyPress = (e:any):void =>{
    if(e.key !== "Enter"){
      setFilter(filter + e.key);
      console.log(filter);
    }else{
      props.profilesByFilter(e.target.value);
    }
  }

  return (
    <div className="searchBox">
        <SearchIcon id="searchIcon"/>
        <input id="textField" onKeyPress={handleKeyPress} placeholder="Search Profile"/>
    </div>
  );
}

export default SearchBox
