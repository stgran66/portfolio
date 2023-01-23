import React from 'react';
import {
  StyledRadioButton,
  StyledBullet,
  FilterContainer,
} from './Filter.styled';

const technologies = [
  'All',
  'HTML',
  'CSS',
  'JS',
  'React',
  'Node.js',
  'MongoDB',
];

const Filter = ({ handleChange, selected }) => {
  return (
    <FilterContainer>
      {technologies.map((tech) => (
        <StyledRadioButton
          key={tech}
          className={selected === tech ? 'active' : 'a'}
        >
          <StyledBullet
            type='radio'
            name='filter'
            value={tech}
            checked={selected === tech}
            onChange={handleChange}
          />
          <i>{tech}</i>
        </StyledRadioButton>
      ))}
    </FilterContainer>
  );
};

export default Filter;
