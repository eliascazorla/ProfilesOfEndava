import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardsContainer from './components/CardsContainer';

interface Profile{
  id:number,
  fullName:string,
  bornDate:string,
  tenure:number,
  seniority:string,
  skills:string[]
}

function App() {
  const profiles: Profile[] = [{id: 1, fullName:"Elias Cazorla", bornDate:"1999-08-14", tenure:1, seniority:"Junior", skills:["C#", "Java"]},
                               {id: 2, fullName:"Martin Martinez", bornDate:"1995-08-14", tenure:3, seniority:"Senior", skills:["Typescript", "React"]}];
  return (
    <div className="App">
      <CardsContainer profiles={profiles}/>
    </div>
  );
}

export default App;
