import styled from 'styled-components';

export const TableOverflow = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  background: #ffffff;
  border-spacing: 0;
  width: 100%;
  height: auto;
  text-align: left;
  border-top: 1px solid #e1e1e1;
  border-collapse: collapse;

  thead th {
    font-size: 14px;
    color: #9198af;
    font-weight: normal;
    border-bottom: 3px solid #e1e1e1;
    padding: 10px;
  }

  tbody td {
    color: #4d4d4d;
    font-size: 14px;
    font-weight: normal;
    padding: 10px;
  }

  tbody tr {
    vertical-align: baseline;
  }

  tbody tr:hover {
    background: #dfeff7 !important;
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
