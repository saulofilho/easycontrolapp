import React, { useState } from 'react';
import DataService from '~/services/allServices';
// import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalCreate() {
  // initial form state
  // const initialFormState = {
  //   id: null,
  //   product_name: '',
  //   product_info: '',
  //   product_department: '',
  //   product_color: '',
  //   product_material: '',
  //   product_price: '',
  //   product_stock: '',
  // };

  const [item, setItem] = useState({
    product_name: '',
  });

  const [btnDisable, setBtnDisable] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(item);
  };

  console.log('e', handleInputChange);

  const saveItem = async () => {
    await DataService.createProducts(item).then(response => {
      setItem(response.data);
      console.log(response.data);
    });
  };

  console.log('item', item);

  // const newItem = () => {
  //   setItem(initialFormState);
  // };

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
        <div className="buttons">
          <button className="cancelar" type="button">
            Cancelar
          </button>
          <button
            disabled={!btnDisable}
            className="salvar"
            type="button"
            onClick={() => {
              // e.preventDefault();
              // if (
              //   !item.product_name ||
              //   !item.product_info ||
              //   !item.product_department
              // )
              //   return;

              saveItem();
              // setItem(initialFormState);
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
