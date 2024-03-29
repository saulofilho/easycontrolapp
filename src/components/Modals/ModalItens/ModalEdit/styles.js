import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #ffffff;

  p {
    font-size: 16px;
    font-weight: normal;
    padding: 16px;
    margin-bottom: 34px;
  }

  label {
    font-size: 14px;
    font-weight: normal;
    color: #8493a5;
  }

  input {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    background: #f9fafc;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    margin: 5px 0 20px;
  }

  textarea {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    background: #f9fafc;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    overflow: auto;
    resize: vertical;
    margin: 5px 0 20px;
    font-family: 'Open Sans', sans-serif;
  }

  .salvar {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: lightgreen;
    color: #fff;

    &:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: white;
    }
  }
`;
