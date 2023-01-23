import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  animation: appear 500ms;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 30px 20px;
  border-radius: 20px;

  width: 600px;
  min-height: 400px;
  background-color: black;
  background-image: radial-gradient(rgba(0, 150, 0, 0.3), black 120%);
  transform: translateY(0);

  color: #33ff00;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 3px #c8c8c8;

  @media screen and (max-width: 767px) {
    width: 480px;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }

  animation: move 500ms;
  @keyframes move {
    from {
      transform: translateY(-500px);
    }
    to {
      transform: translateY(0px);
    }
  }

  &::after {
    content: '';
    border-radius: 20px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -1;
    background: #d8d8d8;
    background: repeating-linear-gradient(
      to bottom,
      #000,
      #000 1px,
      transparent 1px,
      transparent 2px
    );
  }

  ::selection {
    background: lightgray;
    text-shadow: none;
  }
`;
