import React from 'react';
import swal from '@sweetalert/with-react';
import { Table, Container, Form } from './styles';
import edit from '../../assets/images/ic-edit.png';
import delet from '../../assets/images/ic-delete.png';

function TableRow(props) {
  const getRandomColor = () => {
    const colorValues = [
      '#fa8d68',
      '#90d26c',
      '#68a0fa',
      '#fab668',
      '#8368fa',
      '#fa68b5',
      '#5fe2c4',
      '#f55a5a',
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
          {props.searchResults.length > 0
            ? props.searchResults.map(contact => (
                <tr key={contact.id}>
                  <td className="iconLetter">
                    <span
                      style={{
                        background: `${getRandomColor()}`,
                      }}
                    >
                      <p>{contact.name.charAt(0).toUpperCase()}</p>
                    </span>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <span role="button" onClick={props.toggleSecondModal}>
                      <button
                        className="editBtn"
                        type="button"
                        onClick={() => {
                          props.editRow(contact);
                        }}
                      >
                        <img src={edit} alt="Edit" />
                      </button>
                    </span>
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
                                    onClick={() =>
                                      props.deleteContact(contact.id)
                                    }
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
                      <img src={delet} alt="Delete" />
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
