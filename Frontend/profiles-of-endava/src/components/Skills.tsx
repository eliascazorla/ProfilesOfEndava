import * as React from 'react';

interface SkillsProps {
    skills:string[]
}

function Skills (props: SkillsProps) {
  return (
    <div>
      <ul>
            <li>{props.skills[0]}</li>
            <li>{props.skills[1]}</li>
      </ul>
    </div>
  );
}

export default Skills