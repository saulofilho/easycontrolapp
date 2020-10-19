import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0px auto;
  padding: 0 70px 50px;

  display: flex;
  flex-direction: column;

  color: #353c48;

  h1 {
    font-weight: 300;
    padding-bottom: 40px;
  }

  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0 40px 0;
    font-size: 14px;
    color: #8493a5;
  }

  @media (max-width: 500px) {
    padding: 0 20px 50px;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 0 0 30px 0;

  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 0 0;
    font-size: 14px;
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
    color: #8493a5;

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
      color: #8493a5;
    }

    &:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: white;

      a {
        color: white;
      }
    }
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

  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 20px;
    font-size: 14px;
    color: #353c48;
  }

  .react-search-field {
    margin: 20px 0;
  }

  .search {
    width: 100%;
    padding: 0 20px;

    input {
      width: 100%;
      height: auto;
      padding: 10px 15px;
      background: #f9fafc;
      border: 1px solid #dee2e6;
      border-radius: 5px;
    }
  }

  p.search-result-none {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    padding: 5px 20px 0;
    font-size: 12px;
    font-style: italic;
    padding-right: 10px;
    color: #8493a5;
  }
`;
