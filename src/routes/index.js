import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Agenda from '../pages/Agenda';
import Itens from '../pages/Itens';
import CashFlow from '../pages/CashFlow';
import BillsToReceive from '../pages/BillsToReceive';
import BillsToPay from '../pages/BillsToPay';
import ToDo from '../pages/ToDo';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/agenda" component={Agenda} isPrivate />
      <Route path="/itens" component={Itens} isPrivate />
      <Route path="/fluxo-de-caixa" component={CashFlow} isPrivate />
      <Route path="/contas-a-receber" component={BillsToReceive} isPrivate />
      <Route path="/contas-a-pagar" component={BillsToPay} isPrivate />
      <Route path="/tarefas" component={ToDo} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
