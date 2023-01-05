import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    transition: color 0.2s;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.highlight};
    }
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  nav {
    ul {
      display: flex;
      list-style: none;

      @media (max-width: 481px) {
        flex-direction: column;
      }

      li {
        margin: 10px 10px;
      }
    }
  }
`;
export const StyledContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  a {
    color: #fff;
    transition: color 0.2s;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.highlight};
    }
  }

  svg {
    width: 32px;
    height: 32px;
    margin: 0 20px;
  }
`;
