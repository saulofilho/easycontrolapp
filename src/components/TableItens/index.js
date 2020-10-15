/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
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

  const visiblePosts = props.itens.slice(0, limit || props.itens.length);

  return (
    <TableOverflow>
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
          {visiblePosts.length > 0
            ? visiblePosts
                .sort((a, b) => a.id - b.id)
                .map(item => (
                  <tr key={item.id}>
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
                                  <p>Excluir item</p>
                                  <p>Deseja realmente excluir o item?</p>
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
                        <MdDelete size={22} color="pink" />
                      </button>
                    </td>
                  </tr>
                ))
            : null}
        </tbody>
      </Table>
      {showLoadMore && visiblePosts.length < props.itens.length && (
        <div className="btn-ver-mais">
          <button type="button" onClick={increaseLimit}>
            CARREGAR MAIS ITENS
          </button>
        </div>
      )}
    </TableOverflow>
  );
}

export default TableRow;
