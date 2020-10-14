import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {
  MdMenu,
  MdClear,
  MdHome,
  MdMonetizationOn,
  MdEvent,
  MdTrendingUp,
  MdDoneAll,
  MdCompareArrows,
  MdTrendingDown,
  MdCardGiftcard,
} from 'react-icons/md';
import { TopNavMenu } from './styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'active-menu' : 'display-none';

  const profile = useSelector(state => state.user.profile);

  return (
    <TopNavMenu>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <MdClear size={22} color="#a3a3a3" />
        ) : (
          <MdMenu size={22} color="#a3a3a3" />
        )}
      </button>
      <div className={menuClassNames}>
        <div>
          Olá,{' '}
          <Link to="/profile" onClick={() => setIsOpen(!isOpen)}>
            {profile.name}
          </Link>
        </div>
        <Link to="/home" onClick={() => setIsOpen(!isOpen)}>
          <MdHome size={30} color="#a3a3a3" />
        </Link>
        <Link to="/agenda" onClick={() => setIsOpen(!isOpen)}>
          <MdEvent size={30} color="#a3a3a3" />
        </Link>
        <Link to="/fluxo-de-caixa" onClick={() => setIsOpen(!isOpen)}>
          <MdCompareArrows size={30} color="#a3a3a3" />
        </Link>
        <Link to="/contas-a-receber" onClick={() => setIsOpen(!isOpen)}>
          <MdTrendingUp size={30} color="#a3a3a3" />
        </Link>
        <Link to="/contas-a-pagar" onClick={() => setIsOpen(!isOpen)}>
          <MdTrendingDown size={30} color="#a3a3a3" />
        </Link>
        <Link to="/tarefas" onClick={() => setIsOpen(!isOpen)}>
          <MdDoneAll size={30} color="#a3a3a3" />
        </Link>
        <Link to="/itens" onClick={() => setIsOpen(!isOpen)}>
          <MdCardGiftcard size={30} color="#a3a3a3" />
        </Link>
      </div>
    </TopNavMenu>
  );
}
