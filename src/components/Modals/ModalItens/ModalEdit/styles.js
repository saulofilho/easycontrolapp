import styled from 'styled-components';

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
  overflow: hidden;

  p {
    font-size: 16px;
    font-weight: normal;
    padding: 16px;
    margin-bottom: 34px;
  }

  label {
    font-size: 14px;
    font-weight: normal;
  }

  input {
    width: 100%;
    height: 32px;
    border-radius: 4px;
    border: solid 1px #c0c3d2;
    background-color: #ffffff;
    margin: 4px 0 20px 0;
    padding: 7px 0 6px 8px;
  }

  #phone2 {
    width: 128px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
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

  .salvar {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 4px;
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: #fa7268;
    color: #fff;
    margin: 16px;
  }
`;
