import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 0px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: white;
      border: 1px solid lightgray;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: white;
      margin: 0 0 10px;

      &::placeholder {
        color: #a3a3a3;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 12px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 2555, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: lightgreen;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, 'lightblue')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: pink;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, 'pink')};
    }
  }
`;
