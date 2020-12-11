import * as React from 'react';
import { Profile } from '../../interfaces/Profile';
import Card from '../CardComponent/Card';


interface CardsContainerProps {
    profiles:Profile[];
    test?:any;
}

function CardsContainer (props: CardsContainerProps) {
  /*setTimeout(() => {
    props.test("test" + new Date());
  }, 1000)*/
  return (
    <div className="cards_container">
        {props.profiles.map(profile => <Card profile={profile}/>)}
    </div>
  );
}

export default CardsContainer