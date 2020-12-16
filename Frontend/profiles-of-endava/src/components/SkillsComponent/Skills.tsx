import * as React from 'react';
import { SkillLevel } from '../../interfaces/SkillLevel';
import "../SkillsComponent/Skills.scss"

interface SkillsProps {
    skills:SkillLevel[]
}

function Skills (props: SkillsProps) {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
        {props.skills.map(skill => <li>{skill.skill.name}</li>)}
      </ul>
    </div>
  );
}

export default Skills