import * as React from 'react';
import { Profile } from '../../interfaces/Profile';
import Card from '../CardComponent/Card';
import "../CardsContainerComponent/CardsContainer.scss"


interface CardsContainerProps {
    profiles:Profile[];
}

function CardsContainer (props: CardsContainerProps) {
  return (
    <div className="cards_container">
        {props.profiles.length > 0? props.profiles.map(profile => <Card profile={profile}/>):<p>No profiles found.</p>}
    </div>
  );
}

export default CardsContainer