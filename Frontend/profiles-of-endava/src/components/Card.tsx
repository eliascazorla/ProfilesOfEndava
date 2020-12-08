import * as React from 'react';
import PhotoAndInfo from './PhotoAndInfo';
import Skills from './Skills';

interface CardProps {
    profile: Profile
}

interface Profile {
    id:number,
    fullName:string,
    bornDate:string,
    tenure:number,
    seniority:string
    skills:string[]
}

function Card (props: CardProps) {
  return (
    <div className="card">
      <PhotoAndInfo fullName={props.profile.fullName} tenure={props.profile.tenure} seniority={props.profile.seniority} />
      <h3>Skills</h3>
      <Skills skills={props.profile.skills} />
    </div>
  );
}

export default Card