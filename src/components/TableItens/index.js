import React from 'react';
import swal from 'sweetalert';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Table, Container, Form } from './styles';

function TableRow({ toggleSecondModal, itens = [] }) {
  const getRandomColor = () => {
    const colorValues = [
      'orange',
      'lightblue',
      'lightgreen',
      'lightcyan',
      'pink',
      'coral',
      'cornflowblue',
    ];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Contatos</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {itens.length > 0
            ? itens.map(item => (
                <tr key={item.id}>
                  <td className="iconLetter">
                    <div
                      style={{
                        background: `${getRandomColor()}`,
                      }}
                    >
                      <p>{item.product_name.charAt(0).toUpperCase()}</p>
                    </div>
                  </td>
                  <td>{item.product_name}</td>
                  <td>{item.product_name}</td>
                  <td>{item.product_name}</td>
                  <td>
                    <button
                      className="editBtn"
                      type="button"
                      // onClick={() => {
                      //   editRow(item);
                      // }}
                      onClick={toggleSecondModal}
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
                                <label htmlFor="name">
                                  Deseja realmente excluir o contato?
                                </label>
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
                                    // onClick={() => deleteiIem(item.id)}
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
