import styled from 'styled-components';

export const StyledProject = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-basis: calc((100% - 80px) / 3);
  min-width: calc((100% - 80px) / 3);
  background-color: ${(props) => props.theme.background};

  border: none;
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.text};

  :hover,
  :focus {
    color: ${(props) => props.theme.highlight};
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }

  .project-info {
    padding: 20px 20px;

    overflow: hidden;
    max-height: 200px;

    .project-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
    }

    .project-technologies {
      margin: 0.5rem 0;
      font-size: 0.875rem;
      font-weight: 400;
    }

    .project-description {
      margin: 0;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;
