import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { StyledMain } from './Main.styled';
import ProjectList from '../ProjectList/ProjectList';
import { Slider } from '../Carousel/Carousel';

const Main = () => {
  useEffect(() => {
    const container = document.querySelector('.about-me');
    const typewriter = new Typewriter(container, {
      loop: false,
      delay: 20,
    });

    typewriter
      .pauseFor(250)
      .typeString(
        `I'm Stas, a <i>fullstack developer</i> from Poland. I enjoy creating web applications and solving complex <i>coding</i> challenges. My skillset includes both front-end and back-end development. Thanks for stopping by <i>:)</i>`
      )
      .start();
  }, []);
  return (
    <StyledMain>
      <h2 className='about-me'>About me</h2>
      <Slider />

      <p>Here are a few of my recent projects:</p>
      <ProjectList />
    </StyledMain>
  );
};
export default Main;
