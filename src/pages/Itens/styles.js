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
    padding-bottom: 20px;
  }
  h4 {
    font-family: 'Roboto', sans-serif;
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
  h4:first-child {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 5px 0;
  }
  h4 {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 30px 0 5px 0;
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

  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 10px 0;
    font-size: 14px;
  }

  .react-search-field {
    margin: 20px 0;
  }

  button.bnt-add {
    margin: 10px 0;
    width: 200px;
    background: white;
    border: 1px solid yellowgreen;
    border-radius: 5px;
    padding: 10px 0;
    font-weight: 400;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: white;
    }
  }

  button.bnt-csv {
    margin: 10px 0;
    width: 200px;
    background: white;
    border: 1px solid yellowgreen;
    border-radius: 5px;
    padding: 10px 0;
    font-weight: 400;
    text-transform: uppercase;

    a {
      color: #4d4d4d;
    }

    &:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: white;

      a {
        color: white;
      }
    }
  }

  .search {
    input {
      width: 50%;
      height: 30px;
      padding: 5px 10px;
    }
  }

  p.search-result-none {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0;
    font-size: 12px;
    font-style: italic;
    padding-right: 10px;
  }
`;
