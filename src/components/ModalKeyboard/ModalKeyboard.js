import React from 'react';
import { StyledButton, StyledContainer } from './ModalKeyboard.styled';

const ModalKeyboard = ({ link, repoLink, onClose }) => {
  return (
    <StyledContainer>
      <StyledButton onClick={() => (window.location.href = link)}>
        <i>W</i>
      </StyledButton>
      <StyledButton onClick={() => (window.location.href = repoLink)}>
        <i>R</i>
      </StyledButton>
      <StyledButton onClick={() => onClose()}>
        <i>Esc</i>
      </StyledButton>
    </StyledContainer>
  );
};

export default ModalKeyboard;
