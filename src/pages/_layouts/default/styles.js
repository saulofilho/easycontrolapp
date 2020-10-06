import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
  text-transform: capitalize;

  nav {
    background: white;
    border-right: 1px solid lightgray;
    box-shadow: 1px 1px 2px 0 rgba(31, 45, 61, 0.07);
    min-width: 30px !important;

    .sidenav---navtext---1AE_f {
      color: #a3a3a3 !important;
    }

    .sidenav---icon-bar---u1f02 {
      background-color: #a3a3a3 !important;
    }

    .sidenav---navitem---9uL5T {
    }
  }
`;

export const Profile = styled.div`
  width: 50px;
  display: flex;
  flex-flow: column;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  div {
    text-align: center;

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 40px;
    border-radius: 50%;
    width: 100%;
  }
`;
