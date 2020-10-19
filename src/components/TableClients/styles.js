import styled from 'styled-components';
import { darken } from 'polished';

export const TableOverflow = styled.div`
  overflow-x: auto;
  padding: 20px 0 0;

  .btn-ver-mais {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  .btn-ver-mais button {
    margin: 0 auto;
    text-align: center;
    width: auto;
    background: #fff;
    border: 1px solid yellowgreen;
    border-radius: 5px;
    padding: 10px;
    font-weight: 400;
    text-transform: uppercase;
    color: #8493a5;

    &:hover {
      background: ${darken(0.09, 'lightgreen')};
      color: white;
    }
  }
`;

export const Table = styled.table`
  background: #ffffff;
  border-spacing: 0;
  width: 100%;
  height: auto;
  text-align: left;
  border-top: 1px solid #e1e1e1;
  border-bottom: 3px solid #e1e1e1;
  border-collapse: collapse;

  thead th {
    font-size: 14px;
    color: #9198af;
    font-weight: normal;
    border-top: 3px solid #e1e1e1;
    border-bottom: 3px solid #e1e1e1;
    padding: 10px;
    text-transform: capitalize;
  }

  tbody td {
    color: #353c48;
    font-size: 14px;
    font-weight: normal;
    padding: 10px;
  }

  tbody tr {
    vertical-align: baseline;
    text-transform: capitalize;
  }

  tbody tr:hover {
    background: #f9fafc !important;
    cursor: pointer;

    td {
      font-weight: bolder;
    }
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
    color: white;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.16);
    background: #dee2e6;

    &:hover {
      background: ${darken(0.09, '#dee2e6')};
      color: white;
    }
  }

  .excluir {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: pink;
    color: #fff;
    margin: 16px;

    &:hover {
      background: ${darken(0.09, 'pink')};
      color: white;
    }
  }
`;
