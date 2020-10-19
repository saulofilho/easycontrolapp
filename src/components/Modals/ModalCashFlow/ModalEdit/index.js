/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
// import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalEdit(props) {
  return (
    <Container>
      <Form>
        <label htmlFor="title">
          Título da tarefa
          <input
            type="text"
            name="todo_title"
            id="todo_title"
            onChange={props.handleInputChange}
            value={props.currentTodo && props.currentTodo.todo_title}
          />
        </label>
        <label htmlFor="text">
          Descrição da tarefa
          <textarea
            name="todo_text"
            id="todo_text"
            onChange={props.handleInputChange}
            value={props.currentTodo && props.currentTodo.todo_text}
          />
        </label>
        <div className="buttons">
          <button
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              props.updateTodo(props.currentTodo.id, props.currentTodo);
            }}
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ModalEdit;
