import React from 'react';
import { Carousel } from 'react-carousel3';
import { images } from '../../images';
import { Container } from './Carousel.styled';

const { cssImg, htmlImg, jsImg, reactImg, reduxImg, tsImg, nodeImg, mongoImg } =
  images;

export const Slider = () => (
  <Container>
    <Carousel
      height={168}
      width={980}
      yOrigin={42}
      yRadius={48}
      autoPlay={true}
    >
      <div key={1}>
        <img alt='' src={htmlImg} />
      </div>
      <div key={2}>
        <img alt='' src={cssImg} />
      </div>
      <div key={3}>
        <img alt='' src={jsImg} />
      </div>
      <div key={4}>
        <img alt='' src={reactImg} />
      </div>
      <div key={5}>
        <img alt='' src={reduxImg} />
      </div>
      <div key={6}>
        <img alt='' src={tsImg} />
      </div>
      <div key={7}>
        <img alt='' src={nodeImg} />
      </div>
      <div key={8}>
        <img alt='' src={mongoImg} />
      </div>
    </Carousel>
  </Container>
);
