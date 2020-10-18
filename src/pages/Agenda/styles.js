import styled from 'styled-components';

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
