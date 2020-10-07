import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Agenda from '../pages/Agenda';
import Itens from '../pages/Itens';
import Fluxo from '../pages/Fluxo';
import ContasReceber from '../pages/ContasReceber';
import ContasPagar from '../pages/ContasPagar';
import Tarefas from '../pages/Tarefas';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/agenda" component={Agenda} isPrivate />
      <Route path="/itens" component={Itens} isPrivate />
      <Route path="/fluxo-de-caixa" component={Fluxo} isPrivate />
      <Route path="/contas-a-receber" component={ContasReceber} isPrivate />
      <Route path="/contas-a-pagar" component={ContasPagar} isPrivate />
      <Route path="/tarefas" component={Tarefas} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
