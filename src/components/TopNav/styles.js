import styled from 'styled-components';

export const TopNavMenu = styled.div`
  .active-menu {
    width: auto;
    height: auto;
    background: white;
    display: none;
    position: absolute;
    top: 10%;
    border-radius: 4px;
    border: 1px solid lightgray;
    padding: 15px 5px;
    box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.07);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    z-index: 9;
    font-size: 12px;
  }

  .display-none {
    display: none;
  }

  button {
    cursor: pointer;
    outline: 0;
    border: unset;
    background: unset;
    display: none;
  }

  a {
    padding: 20px 0 0;
  }
  @media (max-width: 500px) {
    .active-menu {
      display: flex;
    }
    button {
      display: flex;
    }
  }
`;
