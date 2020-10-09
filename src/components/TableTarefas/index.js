import React from 'react';
import swal from '@sweetalert/with-react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Table, Container, Form } from './styles';

function TableRow(props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th />
            <th>id</th>
            <th>todo title</th>
            <th>todo text</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {props.itens.length > 0
            ? props.itens.map(item => (
                <tr key={item.id}>
                  <td className="iconLetter">
                    <div>
                      <p>{item.todo_title.charAt(0).toUpperCase()}</p>
                    </div>
                  </td>
                  <td>{item.id}</td>
                  <td>{item.todo_title}</td>
                  <td>{item.todo_text}</td>
                  <td>
                    <button
                      className="editBtn"
                      type="button"
                      onClick={() => props.editRow(item)}
                    >
                      <MdEdit size={22} color="#a3a3a3" />
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
                                <p>Excluir contato</p>
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
                                      props.deleteItem(item.id);
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
                      <MdDelete size={22} color="#a3a3a3" />
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
}

export default TableRow;
