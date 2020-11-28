import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Graphs } from './styles';

import ChartHome from '~/components/Charts/ChartHome';

export default function Home() {
  const profile = useSelector(state => state.user.profile);

  return (
    <>
      <Container>
        <h1>Easy Control App</h1>
        <p>
          Bem-vindo (a),{' '}
          {`${profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}.`}
        </p>
        <p>Fazer api do sistema com atualizacoes etc</p>
        <p>trazer status do pagamento do cliente</p>
        <br />
        <br />
        <h1>Projetos</h1>
        <p>
          Aut eos qui in dolorem laborum est iusto ratione. Minus debitis culpa
          et suscipit aperiam. Officia rerum corrupti. Asperiores facere
          voluptatem illo corporis. Autem non ipsum saepe in soluta optio
          dignissimos tenetur. Molestiae similique nihil pariatur nobis rerum
          numquam ut.
        </p>
        <Graphs>
          <div className="item">
            <p>Tarefas Cadastradas</p>
          </div>
          <div className="item">
            <p>Fluxo de Caixa</p>
          </div>
          <div className="item">
            <p>Calendário</p>
          </div>
          <div className="item">
            <p>Próximos Eventos</p>
          </div>
        </Graphs>
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
      {/* <ChartHome itens={itens} /> */}
    </>
  );
}
