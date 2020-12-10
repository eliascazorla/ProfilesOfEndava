import * as React from 'react';
import CardsContainer from '../components/CardsContainerComponent/CardsContainer';
import { Profile } from '../interfaces/Profile';


function ViewProfiles () {
    const profiles: Profile[] = [{id: 1, 
        fullName:"Elias Cazorla",
        bornDate:"1999-08-14", 
        tenure:1, 
        seniority:"Junior Developer", 
        skills:["Python", "SQL", "CSS", "JAVA", "PHP", "HTML", ".NET", "GIT", "SQL"], 
        projects:[{id:1, startDate:"2020-11-02", endDate:"2021-02-02", company:"Endava", description:"Bench Project"}]
        },
        {id: 2, 
         fullName:"Martin Martinez", 
         bornDate:"1995-08-14", 
         tenure:3, 
         seniority:"Senior Developer", 
         skills:["Python", "SQL", "CSS", "JAVA", "PHP", "HTML", ".NET", "GIT", "SQL"], 
         projects:[{id:2, startDate:"2019-11-02", endDate:"2020-04-02", company:"Endava", description:"PROJECT 1"},
                   {id:3, startDate:"2018-11-02", endDate:"2019-04-02", company:"Endava", description:"PROJECT 2"},
                   {id:4, startDate:"2017-11-02", endDate:"2018-04-02", company:"Endava", description:"PROJECT 3"},
                   {id:5, startDate:"2017-05-02", endDate:"2020-04-02", company:"Endava", description:"PROJECT 4"}]
         }];
    return (
        <div>
            <CardsContainer profiles={profiles}/>
        </div>
    );
}

export default ViewProfiles
