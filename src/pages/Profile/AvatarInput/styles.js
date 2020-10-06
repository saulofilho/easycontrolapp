import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    .image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 3px solid lightblue;
    }

    input {
      display: none;
    }
  }
`;
