import React from 'react';

import { StyledProject } from './Project.styled'; // Import the styles for the component

const Project = ({ project, onClick, updateSelectedProject }) => {
  const { title, image, technologies, description } = project;
  return (
    <StyledProject
      onClick={() => {
        onClick();
        updateSelectedProject(project);
      }}
      project={project}
      data-aos='zoom-in'
    >
      <img src={image} alt={title} />
      <div className='project-info'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-technologies'>
          {technologies.map((tech) => (
            <span key={tech}>{tech + ' '}</span>
          ))}
        </p>
        <p className='project-description'>{description}</p>
      </div>
    </StyledProject>
  );
};

export default Project;
