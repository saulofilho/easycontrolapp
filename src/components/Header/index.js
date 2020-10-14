import React from 'react';

import Notifications from '~/components/Notifications';
import TopNav from '~/components/TopNav';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <TopNav />
        <Notifications />
      </Content>
    </Container>
  );
}
