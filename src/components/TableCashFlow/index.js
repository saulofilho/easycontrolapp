import React, { useState } from 'react';
import { parseISO } from 'date-fns';
import swal from '@sweetalert/with-react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Table, TableOverflow, Container, Form } from './styles';

function TableRow(props) {
  // btn load more
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [limit, setLimit] = useState(10);

  const increaseLimit = () => {
    setLimit(limit + limit);
  };

  const dateFormatMonth = props.todos.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('pt-BR'),
      updatedAt: parseISO(date.createdAt).toLocaleString('pt-BR'),
    };
  });

  const visiblePosts = dateFormatMonth.slice(
    0,
    limit || dateFormatMonth.length
  );

  return (
    <>
      <TableOverflow>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {visiblePosts.length > 0
              ? visiblePosts.map(todo => (
                  <tr key={todo.id}>
                    <td>{todo.createdAt}</td>
                    <td>{todo.cash_in}</td>
                    <td>{todo.cash_out}</td>
                    <td>
                      <button
                        className="editBtn"
                        type="button"
                        onClick={() => props.editRow(todo)}
                      >
                        <MdEdit size={22} color="lightblue" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="deletBtn"
                        type="button"
                        onClick={() =>
                          swal({
                            buttons: {},
                            content: (
                              <Container>
                                <Form>
                                  <p>Deseja realmente excluir o contato?</p>
                                  <div className="buttons">
                                    <button
                                      className="cancelar"
                                      type="button"
                                      onClick={() => swal.close()}
                                    >
                                      Cancelar
                                    </button>
                                    <button
                                      className="excluir"
                                      type="button"
                                      onClick={() => {
                                        props.deleteTodo(todo.id);
                                        window.location.reload();
                                      }}
                                    >
                                      Excluir
                                    </button>
                                  </div>
                                </Form>
                              </Container>
                            ),
                          })
                        }
                      >
                        <MdDelete size={22} color="pink" />
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
        {showLoadMore && visiblePosts.length < props.todos.length && (
          <div className="btn-ver-mais">
            <button type="button" onClick={increaseLimit}>
              CARREGAR MAIS ITENS
            </button>
          </div>
        )}
      </TableOverflow>
    </>
  );
}

export default TableRow;
