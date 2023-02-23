import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledContacts } from './Header.styled';
import { FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => (
  <StyledHeader>
    <Link to='/'>
      <h1>My Projects</h1>
    </Link>
    <StyledContacts>
      <a href='https://www.linkedin.com/in/stanislaw-grygoriew-b3b0a6255/'>
        <FaLinkedin size={32} />
      </a>
      <a href='mailto: stanislaw.grygoriew@gmail.com'>
        <FaMailBulk size={32} />
      </a>
      <a href='https://github.com/stgran66'>
        <FaGithub size={32} />
      </a>
    </StyledContacts>
  </StyledHeader>
);

export default Header;
