import * as React from 'react';
import "../SkillsComponent/Skills.scss"

interface SkillsProps {
    skills:string[]
}

function Skills (props: SkillsProps) {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
            <li>{props.skills[0]}</li>
            <li>{props.skills[1]}</li>
            <li>{props.skills[2]}</li>
      </ul>
      <ul>
            <li>{props.skills[3]}</li>
            <li>{props.skills[4]}</li>
            <li>{props.skills[5]}</li>
      </ul>
      <ul>
            <li>{props.skills[6]}</li>
            <li>{props.skills[7]}</li>
            <li>{props.skills[8]}</li>
      </ul>
    </div>
  );
}

export default Skills