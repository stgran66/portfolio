import styled from 'styled-components';

export const StyledRadioButton = styled.label`
  position: relative;
  display: inline-block;
  min-width: 80px;
  height: 60px;
  padding: 8px 15px;
  margin: 8px 4px;
  border-radius: 10px;
  background: linear-gradient(180deg, #282828, #202020);
  box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
    inset 0 -8px 8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75),
    10px 20px 25px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 4px;
    bottom: 14px;
    right: 12px;
    background: linear-gradient(90deg, #232323, #4a4a4a);
    border-radius: 10px;
    box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25),
      10px 5px 10px rgba(0, 0, 0, 0.15);
    border-left: 1px solid #0004;
    border-bottom: 1px solid #0004;
    border-top: 1px solid #0004;
    transition: all 0.2s;
  }

  i {
    position: relative;
    color: #fff;
    font-style: normal;
    text-transform: uppercase;
    font-size: 1, 5em;
    transition: all 0.2s;
  }
  /* appearance: none;
  background-color: #333;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  margin-right: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  text-shadow: none; */
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
    /* box-shadow: none; */
    i {
      color: ${(props) => props.theme.terminalText};
      text-shadow: 0 0 1px #c8c8c8;
    }

    ::before {
      box-shadow: none;
    }
  }

  /* &:focus {
    box-shadow: 0 0 0 3px rgba(59, 153, 252, 0.7);
  } */

  &.active {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
    /* box-shadow: none; */
    i {
      color: ${(props) => props.theme.terminalText};
      text-shadow: 0 0 1px #c8c8c8;
    }

    ::before {
      box-shadow: none;
    }
  }
`;

export const StyledBullet = styled.input`
  display: none;
`;
