import React from 'react';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>api BuenaVistaLab</h1>
      <ol>
        <li>ola, user</li>
        <li>mensagens sobre o sistema, atualizacoes etc</li>
        <li>status pagamento</li>
      </ol>
      <br />
      <br />
      <h1>api EasyControl</h1>
      <ol>
        <li>total de itens cadastrados</li>
        <li>total de tarefas cadastradas e proximas tasks</li>
        <li>fluxo do caixa</li>
        <li>proximos eventos na agenda</li>
      </ol>
      <br />
      <br />
      <h1>calculadora</h1>
      <br />
      <br />
      <h1>clima</h1>
      <br />
      <br />
      <h1>transito local</h1>
      <br />
      <br />
      <h1>cotacao de moedas</h1>
    </Container>
  );
}
