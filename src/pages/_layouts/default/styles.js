import styled from 'styled-components';

export const Wrapper = styled.div`
  text-transform: capitalize;

  nav {
    position: fixed;
    background: white;
    border-right: 1px solid lightgray;
    box-shadow: 1px 1px 2px 0 rgba(31, 45, 61, 0.07);

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
      border-left: 3px solid orange;
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
      background: lightyellow !important;
    }

    .sidenav---sidenav-nav---3tvij
      > .sidenav---sidenav-navitem---uwIJ-
      > .sidenav---navitem---9uL5T
      .sidenav---navicon---3gCRo:hover {
      background: lightyellow !important;
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
