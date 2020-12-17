import * as React from 'react';
import "../SearchBoxComponent/SearchBox.scss"
import {useState} from "react"

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
        <input type="text" placeholder="Search Profile" onKeyPress={e=> handleKeyPress(e)}/>
    </div>
  );
}

export default SearchBox
