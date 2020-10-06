import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { MdHome, MdMoneyOff, MdViewAgenda } from 'react-icons/md';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import Header from '~/components/Header';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Wrapper, Profile } from './styles';

export default function DefaultLayout({ children }) {
  const profile = useSelector(state => state.user.profile);

  return (
    <Wrapper>
      <Header />
      {children}
      <SideNav
        onSelect={selected => {
          const to = `/${selected}`;
          if (children.props.location.pathname !== to) {
            children.props.history.push(to);
          }
        }}
      >
        <Toggle />
        <Nav defaultSelected="home">
          <NavItem eventKey="profile">
            <NavIcon>
              <Profile>
                <div>
                  <Link to="/profile">
                    <img
                      src={
                        profile.avatar
                          ? profile.avatar.url
                          : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                      }
                      alt="Avatar"
                    />
                  </Link>
                </div>
              </Profile>
            </NavIcon>
            <NavText>{profile.name}</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <MdHome size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="agenda">
            <NavIcon>
              <MdViewAgenda size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Agenda</NavText>
          </NavItem>
          <NavItem eventKey="Finanças">
            <NavIcon>
              <MdMoneyOff size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Finanças</NavText>
            <NavItem eventKey="fluxo-de-caixa">
              <NavText>Fluxo de Caixa</NavText>
            </NavItem>
            <NavItem eventKey="contas-a-receber">
              <NavText>Contas a Receber</NavText>
            </NavItem>
            <NavItem eventKey="contas-a-pagar">
              <NavText>Contas a Pagar</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="tarefas">
            <NavIcon>
              <MdHome size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Tarefas</NavText>
          </NavItem>
          <NavItem eventKey="itens">
            <NavIcon>
              <MdHome size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Itens</NavText>
          </NavItem>
          <NavItem eventKey="calendario">
            <NavIcon>
              <MdHome size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Calendários</NavText>
          </NavItem>
        </Nav>
      </SideNav>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
