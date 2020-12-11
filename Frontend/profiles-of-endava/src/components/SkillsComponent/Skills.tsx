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
            <li>{props.skills[0].skill.name}</li>
            {/* <li>{props.skills[1].skill.name}</li>
            <li>{props.skills[2].skill.name}</li> */}
      </ul>
      <ul>
      </ul>
      <ul>
            
      </ul>
    </div>
  );
}

export default Skills