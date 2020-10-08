/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
// import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalEdit(props) {
  const [item, setItem] = useState(props.currentItem);

  console.log('qew', item);

  const handleInputChange = e => {
    const {
      name,
      info,
      department,
      color,
      material,
      price,
      stock,
      value,
    } = e.target;
    setItem(prevState => ({
      ...prevState,
      [name]: value,
      [info]: value,
      [department]: value,
      [color]: value,
      [material]: value,
      [price]: value,
      [stock]: value,
    }));
  };

  useEffect(() => {
    setItem(props.currentItem);
  }, [props]);

  return (
    <Container>
      <Form>
        <p>Criar novo contato</p>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="product_name"
            value={item.product_name}
            id="name"
            placeholder="Nome Completo"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="info">
          info
          <input
            type="text"
            name="product_info"
            value={item.product_info}
            id="info"
            placeholder="Nome Completo"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="department">
          department
          <input
            type="text"
            name="product_department"
            value={item.product_department}
            id="department"
            placeholder="Nome Completo"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="color">
          color
          <input
            type="text"
            name="product_color"
            value={item.product_color}
            id="color"
            placeholder="color"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="material">
          material
          <input
            type="text"
            name="product_material"
            value={item.product_material}
            id="material"
            placeholder="material"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="price">
          price
          <input
            type="text"
            name="product_price"
            value={item.product_price}
            id="price"
            placeholder="price"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="stock">
          stock
          <input
            type="text"
            name="product_stock"
            value={item.product_stock}
            id="stock"
            placeholder="stock"
            onChange={handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              props.updateItem(item.id, item);
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
