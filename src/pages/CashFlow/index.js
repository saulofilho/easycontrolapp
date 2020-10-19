import React, { useState, useEffect } from 'react';
import Modali, { useModali } from 'modali';

import DataService from '~/services/allServices';
import TableCashFlow from '~/components/TableCashFlow';
import ModalCreate from '~/components/Modals/ModalCashFlow/ModalCreate';
import ModalEdit from '~/components/Modals/ModalCashFlow/ModalEdit';

import { Container, TableHeader, TableWapper } from './styles';

export default function ToDo() {
  // data
  const [todos, setTodos] = useState([]);

  // initial form state
  const initialFormState = {
    id: '',
    cash_in: '',
    cash_out: '',
  };

  // get todo
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  // modal
  const [firstModal, toggleFirstModal] = useModali({
    closeButton: true,
    animated: true,
    centered: true,
  });
  const [secondModal, toggleSecondModal] = useModali({
    closeButton: true,
    animated: true,
    centered: true,
  });

  // search
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const results = !searchValue
    ? todos
    : todos.filter(todo =>
        todo.todo_title.toLowerCase().includes(searchValue.toLowerCase())
      );

  // get todo
  useEffect(() => {
    async function loadCashFlow() {
      const response = await DataService.getCashflow();

      const { data } = response;

      setTodos([...data]);
    }

    loadCashFlow();
  }, []);

  // create
  const [btnDisable, setBtnDisable] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentTodo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveTodo = async () => {
    await DataService.createTodo(currentTodo).then(response => {
      setCurrentTodo(response.data);
    });
  };

  // update
  const updateTodo = async (id, updatedContact) => {
    await DataService.updateTodo(currentTodo.id, currentTodo).then(response => {
      setTodos(todos.map(todo => (todo.id === id ? updatedContact : todo)));
    });
    window.location.reload();
  };

  // edit
  const editRow = todo => {
    toggleSecondModal();
    setCurrentTodo(todo);
  };

  // delete
  const deleteTodo = async id => {
    await DataService.removeTodo(id).then(response => {
      setTodos(todos.filter(todo => todo.id !== todos.id));
    });
  };

  return (
    <>
      <Container>
        <h1>Fluxo de Caixa</h1>
        <p>
          xxx
          <br />
          <br />
          xxx
        </p>
        <TableHeader>
          <p>
            <strong>Cadastrar uma nova tarefa.</strong>
          </p>
          <button className="bnt-add" onClick={toggleFirstModal} type="button">
            Adicionar
          </button>
        </TableHeader>
        <TableWapper>
          <p>As minhas tarefas.</p>
          <form className="search">
            <input
              value={searchValue}
              onChange={handleSearchInputChanges}
              placeholder="Procure qualquer tarefa pelo título..."
              type="text"
            />
          </form>
          {todos.length ? (
            <div>
              <p className="search-result-none">
                Total de tarefas cadastradas: <strong>{todos.length}</strong>
              </p>
            </div>
          ) : (
            <p className="search-result-none">Carregando...</p>
          )}
          <TableCashFlow
            toggleSecondModal={toggleSecondModal}
            todos={results}
            deleteTodo={deleteTodo}
            editRow={editRow}
          />
        </TableWapper>
        {/* <ChartTodDo todos={todos} /> */}
      </Container>
      <Modali.Modal {...firstModal}>
        <ModalCreate
          toggleFirstModal={toggleFirstModal}
          btnDisable={btnDisable}
          handleInputChange={handleInputChange}
          saveTodo={saveTodo}
          currentTodo={currentTodo}
        />
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        <ModalEdit
          currentTodo={currentTodo}
          updateTodo={updateTodo}
          handleInputChange={handleInputChange}
        />
      </Modali.Modal>
    </>
  );
}
