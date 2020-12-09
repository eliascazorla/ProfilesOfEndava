import * as React from 'react';
import { Profile } from '../interfaces/Profile';
import PhotoAndInfo from './PhotoAndInfo';
import Projects from './Projects';
import Skills from './Skills';

interface CardProps {
    profile: Profile
}

function Card (props: CardProps) {
  return (
    <div className="card">
      <PhotoAndInfo fullName={props.profile.fullName} tenure={props.profile.tenure} seniority={props.profile.seniority}/>
      <Skills skills={props.profile.skills} />
      <Projects projects={props.profile.projects}/>
    </div>
  );
}

export default Card