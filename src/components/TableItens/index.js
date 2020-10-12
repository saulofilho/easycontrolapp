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
            <th>id</th>
            <th>nome</th>
            <th>infos</th>
            <th>departamento</th>
            <th>cor</th>
            <th>material</th>
            <th>preco</th>
            <th>estoque</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {props.itens.length > 0
            ? props.itens
                .sort((a, b) => a.id - b.id)
                .map(item => (
                  <tr key={item.id}>
                    {console.log('dssadas', props.itens)}
                    <td>{item.id}</td>
                    <td>{item.product_name}</td>
                    <td>{item.product_info}</td>
                    <td>{item.product_department}</td>
                    <td>{item.product_color}</td>
                    <td>{item.product_material}</td>
                    <td>{item.product_price}</td>
                    <td>{item.product_stock}</td>
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
                        <MdDelete size={22} color="#ff99cc" />
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
