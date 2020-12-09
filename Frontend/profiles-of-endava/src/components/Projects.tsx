import * as React from 'react';
import { Project } from '../interfaces/Project';

interface ProjectsProps {
    projects:Project[]
}

function Projects (props: ProjectsProps) {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <ul>
        {props.projects.map(project => <li>{project.description}</li>)}
      </ul>
    </div>
  );
}

export default Projects