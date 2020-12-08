import * as React from 'react';
import Card from './Card';

interface CardsContainerProps {
    profiles:Profile[]
}

interface Profile{
    id:number,
    fullName:string,
    bornDate:string,
    tenure:number,
    seniority:string
    skills:string[]
}

function CardsContainer (props: CardsContainerProps) {
  return (
    <div>
        {props.profiles.map(profile => <Card profile={profile}/>)}
    </div>
  );
}

export default CardsContainer