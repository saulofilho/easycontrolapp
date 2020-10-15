import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 1px solid lightgreen;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased !important;
    background: #f7f7f7;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgreen;
  }
  ::selection {
    background-color: darkblue;
    color: pink;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 34px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 16px;
    }
    h5 {
      font-size: 14px;
    }
    h6 {
      font-size: 12px;
    }
  }
`;
