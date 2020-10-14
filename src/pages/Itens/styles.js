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

export const TableHeader = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 20px;

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
    padding: 10px 20px 50px;
  }
`;

export const TableWapper = styled.div`
  width: 100%;
  margin: 0px auto;

  display: flex;
  flex-direction: column;

  background: white;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.07);

  display: flex;
  flex-direction: column;

  color: #4d4d4d;

  h5 {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
  }
  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 20px 0;
    font-size: 14px;
  }

  .react-search-field {
    margin: 20px 0;
  }

  button.bnt-add {
    margin: 10px 0;
    width: calc(100% - 60%);
    background: lightgreen;
    border: 0;
    padding: 10px 0;
    font-weight: 400;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.09, 'lightgreen')};
    }
  }
`;
