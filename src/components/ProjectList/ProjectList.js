import React, { useState } from 'react';
import { StyledProjectList, StyledContainer } from './ProjectList.styled';
import Filter from '../Filter/Filter';
import Project from '../Project/Project';
import { Modal } from '../Modal/Modal';
import { projects } from '../../data';

const ProjectList = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.technologies.includes(selectedFilter);
  });

  const openModal = (e) => {
    setShowModal(true);
    document.querySelector('body').classList.add('no-scroll');
  };

  const closeModal = () => {
    setShowModal(false);
    document.querySelector('body').classList.remove('no-scroll');
  };

  return (
    <StyledContainer>
      {showModal && (
        <Modal
          show={showModal}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
      <Filter handleChange={handleChange} selected={selectedFilter} />
      <StyledProjectList>
        {filteredProjects.map((project) => (
          <Project
            onClick={openModal}
            project={project}
            key={project.title}
            updateSelectedProject={(project) => setSelectedProject(project)}
          />
        ))}
      </StyledProjectList>
    </StyledContainer>
  );
};

export default ProjectList;
