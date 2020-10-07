import styled from 'styled-components';

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
  width: 432px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  overflow: hidden;

  p {
    font-size: 16px;
    font-weight: normal;
    padding: 16px;
    border-bottom: 1px solid #c0c3d2;
    margin-bottom: 34px;
  }

  label {
    margin-left: 24px;
    font-size: 14px;
    font-weight: normal;
  }

  input {
    width: 384px;
    height: 32px;
    border-radius: 4px;
    border: solid 1px #c0c3d2;
    background-color: #ffffff;
    margin: 4px 0 16px 24px;
    padding: 7px 0 6px 8px;
  }

  #phone2 {
    width: 128px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #c0c3d2;
  }

  .cancelar {
    width: 72px;
    height: 32px;
    border: none;
    color: #fa7268;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px rgba(255, 255, 255, 0.16);
  }

  .salvar {
    width: 72px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px rgba(255, 255, 255, 0.16);
    background-color: #fa7268;
    color: #fff;
    margin: 16px;
  }
`;
