import * as React from 'react';
import "../SearchBoxComponent/SearchBox.scss"
import {useState} from "react"
import SearchIcon from "@material-ui/icons/Search"

interface SearchBoxProps{
  profilesByName?:any;
}

function SearchBox (props: SearchBoxProps) {

  const [name, setName] = useState("");

  const handleKeyPress = (e:any):void =>{
    if(e.key != "Enter"){
      setName(name + e.key);
    }else{
      props.profilesByName(e.target.value);
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
