import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0px auto;
  padding: 0 70px 50px;

  display: flex;
  flex-direction: column;

  color: #4d4d4d;

  h1 {
    font-weight: 300;
  }
  h4 {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 40px 0 20px 0;
  }
  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 40px 0;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    padding: 0 20px 50px;
  }
`;

export const Box = styled.div`
  background: white;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.07);

  display: flex;
  flex-direction: column;
  padding: 20px;

  h5 {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 20px 0;
    font-style: italic;
  }

  form {
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-size: 14px;
    color: #4d4d4d;
    font-family: 'Open Sans', sans-serif;

    input {
      background: white;
      border: 1px solid lightgray;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;

      font-size: 14px;
      font-weight: 400;
      color: #4d4d4d;
      margin: 0 0 10px;

      &::placeholder {
        color: lightgray;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 12px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: lightblue;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'lightblue')};
      }
    }
  }
`;
