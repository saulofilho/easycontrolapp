import React from 'react';

import Notifications from '~/components/Notifications';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Notifications />
      </Content>
    </Container>
  );
}
