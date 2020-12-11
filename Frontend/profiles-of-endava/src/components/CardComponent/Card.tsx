import * as React from 'react';
import { Profile } from '../../interfaces/Profile';
import PhotoAndInfo from '../PhotoAndInfoComponent/PhotoAndInfo';
import Projects from '../ProjectsComponent/Projects';
import Skills from '../SkillsComponent/Skills';
import "../CardComponent/Card.scss"

interface CardProps {
    profile: Profile
}

function Card (props: CardProps) {
  return (
    <div className="card">
      <PhotoAndInfo fullName={props.profile.fullName} tenure={props.profile.tenure} seniority={props.profile.seniority}/>
      <Skills skills={props.profile.skills} />
      <Projects projects={props.profile.historicalProjects}/>
    </div>
  );
}

export default Card