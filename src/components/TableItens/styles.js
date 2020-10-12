import styled from 'styled-components';

export const Table = styled.table`
  background: #ffffff;
  border-spacing: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  text-align: left;
  border-collapse: separate;
  border-top: 1px solid #e1e1e1;

  .iconLetter {
    width: 50px;
  }

  .iconLetter div {
    width: 24px;
    height: 24px;
    background-color: #fa8d68;
    border-radius: 50%;
    display: inline-block;
    margin-left: 8px;
  }

  .iconLetter div p {
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
  }

  thead th {
    font-size: 12px;
    color: #9198af;
    font-weight: normal;
    border-bottom: 1px solid yellowgreen;
    padding: 10px;
  }

  tbody td {
    height: 40px;
    color: #2a2d3b;
    font-size: 14px;
    font-weight: normal;
    padding: 10px;
  }

  /* tbody tr {
    animation: background-fade 10s forwards;
    -webkit-animation: background-fade 10s forwards;
    -moz-animation: background-fade 10s forwards;
  }

  @-webkit-keyframes background-fade {
    10% {
      background: lightgreen;
    }
  }
  @-moz-keyframes background-fade {
    10% {
      background: lightgreen;
    }
  }
  @keyframes background-fade {
    10% {
      background: lightgreen;
    }
  } */

  tbody tr:hover {
    background: lightblue !important;
    cursor: pointer;
  }

  tbody tr td {
    border-bottom: 1px solid #e1e1e1;
  }

  button {
    border: 0;
    background: none;
  }

  .noContacts {
    padding-left: 25px;
  }

  .editBtn {
    margin-right: calc(1vw - 1.7vw);
  }

  .deletBtn {
    margin-right: calc(1vw - 1.6vw);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  overflow: hidden;

  p {
    font-size: 16px;
    font-weight: normal;
    padding: 16px;
    margin-bottom: 34px;
  }

  label {
    margin-left: 24px;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 57px;
    text-align: left;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    outline: 0;
  }

  .cancelar {
    width: 72px;
    height: 32px;
    border: none;
    color: #fa7268;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.16);
  }

  .excluir {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: #fa7268;
    color: #fff;
    margin: 16px;
  }
`;
