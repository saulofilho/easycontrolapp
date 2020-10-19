import React from 'react';

import { Container, Form } from './styles';

function ModalCreate(props) {
  return (
    <Container>
      <Form>
        <label htmlFor="title">
          Título da tarefa
          <input
            type="text"
            name="todo_title"
            id="todo_title"
            placeholder="Qual é o título da tarefa"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="text">
          Descrição da tarefa
          <textarea
            name="todo_text"
            id="todo_text"
            placeholder="Descreva a tarefa detalhadamente"
            onChange={props.handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            disabled={!props.btnDisable}
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              if (!props.currentTodo.todo_title || !props.currentTodo.todo_text)
                return;

              props.saveTodo(props.currentTodo);
              window.location.reload();
            }}
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ModalCreate;
