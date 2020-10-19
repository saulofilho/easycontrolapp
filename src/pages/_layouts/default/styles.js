import styled from 'styled-components';

export const Wrapper = styled.div`
  nav {
    position: fixed;
    background: white;
    border-right: 1px solid lightgray;
    box-shadow: 1px 1px 2px 0 rgba(31, 45, 61, 0.07);
    text-transform: capitalize;

    .sidenav---navtext---1AE_f {
      color: #a3a3a3 !important;
    }

    .sidenav---icon-bar---u1f02 {
      background-color: #a3a3a3 !important;
    }

    .sidenav---navicon---3gCRo {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }

    .sidenav---sidenav-nav---3tvij
      > .sidenav---sidenav-navitem---uwIJ-.sidenav---highlighted---oUx9u
      > .sidenav---navitem---9uL5T::after,
    .sidenav---sidenav-nav---3tvij
      > .sidenav---sidenav-navitem---uwIJ-:hover.sidenav---highlighted---oUx9u
      > .sidenav---navitem---9uL5T::after {
      background: unset !important;
      opacity: unset !important;
      border-left: 3px solid lightgreen;
    }

    .sidenav---sidenav-subnav---1EN61
      > .sidenav---sidenav-subnavitem---1cD47.sidenav---selected---1EK3y
      > .sidenav---navitem---9uL5T {
      color: unset !important;
      font-weight: unset !important;
      background: none;
      cursor: default;
      border-left: 3px solid pink;
    }

    .sidenav---sidenav-subnav---1EN61
      > .sidenav---sidenav-subnavitem---1cD47
      > .sidenav---navitem---9uL5T:hover {
      background: #e9fce9 !important;
    }

    .sidenav---navitem---9uL5T {
      display: flex !important;
      flex-flow: row !important;
    }

    .sidenav---sidenav-subnav---1EN61
      > .sidenav---sidenav-subnavitem---1cD47:first-child {
      border-bottom: unset !important;
    }

    .sidenav---navicon---3gCRo {
      margin-right: 20px;
    }

    @media (max-width: 500px) {
      position: unset;
      display: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  a {
    height: 40px !important;
    color: #999;
  }

  img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
`;
