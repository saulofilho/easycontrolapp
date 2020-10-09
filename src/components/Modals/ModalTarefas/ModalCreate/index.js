import React, { useState } from 'react';
import DataService from '~/services/allServices';
// import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalCreate(props) {
  return (
    <Container>
      <Form>
        <p>Criar novo contato</p>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="product_name"
            id="name"
            placeholder="Nome Completo"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="info">
          info
          <input
            type="text"
            name="product_info"
            id="info"
            placeholder="Nome Completo"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="department">
          department
          <input
            type="text"
            name="product_department"
            id="department"
            placeholder="Nome Completo"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="color">
          color
          <input
            type="text"
            name="product_color"
            id="color"
            placeholder="color"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="material">
          material
          <input
            type="text"
            name="product_material"
            id="material"
            placeholder="material"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="price">
          price
          <input
            type="text"
            name="product_price"
            id="price"
            placeholder="price"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="stock">
          stock
          <input
            type="text"
            name="product_stock"
            id="stock"
            placeholder="stock"
            onChange={props.handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            disabled={!props.btnDisable}
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              if (
                !props.currentItem.product_name ||
                !props.currentItem.product_info ||
                !props.currentItem.product_department ||
                !props.currentItem.product_color ||
                !props.currentItem.product_material ||
                !props.currentItem.product_price ||
                !props.currentItem.product_stock
              )
                return;

              props.saveItem(props.currentItem);
              window.location.reload();
            }}
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ModalCreate;
