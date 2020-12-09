import * as React from 'react';
import { Project } from '../interfaces/Project';

interface ProjectsProps {
    projects:Project[]
}

function Projects (props: ProjectsProps) {
  return (
    <div>
      <ul>
        {props.projects.map(project => <li>{project.description}</li>)}
      </ul>
    </div>
  );
}

export default Projects