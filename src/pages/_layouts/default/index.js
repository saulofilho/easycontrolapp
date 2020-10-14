import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import {
  MdHome,
  MdMonetizationOn,
  MdEvent,
  MdTrendingUp,
  MdDoneAll,
  MdCompareArrows,
  MdTrendingDown,
  MdCardGiftcard,
} from 'react-icons/md';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

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
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="agenda">
            <NavIcon>
              <MdEvent size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Agenda</NavText>
          </NavItem>
          <NavItem eventKey="financas">
            <NavIcon>
              <MdMonetizationOn size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Finanças</NavText>
            <NavItem eventKey="fluxo-de-caixa">
              <NavIcon>
                <MdCompareArrows size={22} color="#a3a3a3" />
              </NavIcon>
              <NavText>Fluxo de Caixa</NavText>
            </NavItem>
            <NavItem eventKey="contas-a-receber">
              <NavIcon>
                <MdTrendingUp size={22} color="#a3a3a3" />
              </NavIcon>
              <NavText>Contas a Receber</NavText>
            </NavItem>
            <NavItem eventKey="contas-a-pagar">
              <NavIcon>
                <MdTrendingDown size={22} color="#a3a3a3" />
              </NavIcon>
              <NavText>Contas a Pagar</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="tarefas">
            <NavIcon>
              <MdDoneAll size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Tarefas</NavText>
          </NavItem>
          <NavItem eventKey="itens">
            <NavIcon>
              <MdCardGiftcard size={22} color="#a3a3a3" />
            </NavIcon>
            <NavText>Itens/Produtos</NavText>
          </NavItem>
        </Nav>
      </SideNav>
      <Footer />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
