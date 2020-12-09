import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardsContainer from './components/CardsContainer';
import { Profile } from './interfaces/Profile';



function App() {
  const profiles: Profile[] = [{id: 1, 
                               fullName:"Elias Cazorla",
                               bornDate:"1999-08-14", 
                               tenure:1, 
                               seniority:"Junior", 
                               skills:["C#", "Java"], 
                               projects:[{id:1, startDate:"2020-11-02", endDate:"2021-02-02", company:"Endava", description:"Bench Project"}]
                               },
                               {id: 2, 
                                fullName:"Martin Martinez", 
                                bornDate:"1995-08-14", 
                                tenure:3, 
                                seniority:"Senior", 
                                skills:["Typescript", "React"],
                                projects:[{id:2, startDate:"2019-11-02", endDate:"2020-04-02", company:"Endava", description:"Project 1"}]
                                }];
  return (
    <div className="App">
      <CardsContainer profiles={profiles}/>
    </div>
  );
}

export default App;
