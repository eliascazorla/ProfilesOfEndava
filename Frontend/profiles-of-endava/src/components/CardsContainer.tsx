import * as React from 'react';
import { Profile } from '../interfaces/Profile';
import Card from './Card';

interface CardsContainerProps {
    profiles:Profile[]
}

function CardsContainer (props: CardsContainerProps) {
  return (
    <div>
        {props.profiles.map(profile => <Card profile={profile}/>)}
    </div>
  );
}

export default CardsContainer