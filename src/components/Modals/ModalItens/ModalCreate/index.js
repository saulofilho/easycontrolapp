import React from 'react';
import { Container, Form } from './styles';

// https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask
// https://unform.dev/guides/basic-form

function ModalCreate(props) {
  return (
    <Container>
      <Form>
        <label htmlFor="name">
          Nome do item
          <input
            type="text"
            name="product_name"
            id="name"
            placeholder="Bola"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="info">
          Informações
          <textarea
            name="product_info"
            id="info"
            placeholder="Produto da campanha de Natal..."
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="department">
          Departamento
          <input
            type="text"
            name="product_department"
            id="department"
            placeholder="Comercial"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="color">
          Cor
          <input
            type="text"
            name="product_color"
            id="color"
            placeholder="Azul"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="material">
          Material
          <input
            type="text"
            name="product_material"
            id="material"
            placeholder="Plástico"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="price">
          Preço
          <input
            type="text"
            name="product_price"
            id="price"
            placeholder="9.99"
            onChange={props.handleInputChange}
          />
        </label>
        <label htmlFor="stock">
          Estoque
          <input
            type="text"
            name="product_stock"
            id="stock"
            placeholder="1"
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
