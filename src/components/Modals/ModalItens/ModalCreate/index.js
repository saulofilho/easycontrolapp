import React, { useState } from 'react';
import DataService from '~/services/allServices';
// import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalCreate(props) {
  // initial form state
  const initialFormState = {
    product_name: '',
    product_info: '',
    product_department: '',
    product_color: '',
    product_material: '',
    product_price: '',
    product_stock: '',
  };

  const [item, setItem] = useState(initialFormState);

  const [btnDisable, setBtnDisable] = useState('');

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
    setBtnDisable(e.target.value);
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

  const saveItem = async () => {
    await DataService.createProducts(item).then(response => {
      setItem(response.data);
    });
  };

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
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="info">
          info
          <input
            type="text"
            name="product_info"
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
            id="stock"
            placeholder="stock"
            onChange={handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            disabled={!btnDisable}
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              if (
                !item.product_name ||
                !item.product_info ||
                !item.product_department ||
                !item.product_color ||
                !item.product_material ||
                !item.product_price ||
                !item.product_stock
              )
                return;

              saveItem(item);
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
