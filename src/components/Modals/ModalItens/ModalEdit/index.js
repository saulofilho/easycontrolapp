/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalEdit(props) {
  return (
    <Container>
      <Form>
        <label htmlFor="name">
          Nome do item
          <input
            type="text"
            name="product_name"
            value={props.currentItem && props.currentItem.product_name}
            id="name"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="info">
          Informações
          <textarea
            name="product_info"
            value={props.currentItem && props.currentItem.product_info}
            id="info"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="department">
          Departamento
          <input
            type="text"
            name="product_department"
            value={props.currentItem && props.currentItem.product_department}
            id="department"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="color">
          Cor
          <input
            type="text"
            name="product_color"
            value={props.currentItem && props.currentItem.product_color}
            id="color"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="material">
          Material
          <input
            type="text"
            name="product_material"
            value={props.currentItem && props.currentItem.product_material}
            id="material"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="price">
          Preço
          <input
            type="text"
            name="product_price"
            value={props.currentItem && props.currentItem.product_price}
            id="price"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="stock">
          Estoque
          <input
            type="text"
            name="product_stock"
            value={props.currentItem && props.currentItem.product_stock}
            id="stock"
            onChange={props.handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              props.updateItem(props.currentItem.id, props.currentItem);
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
