import React, { useState, useEffect } from 'react';
import Modali, { useModali } from 'modali';

import DataService from '~/services/allServices';
import TableTarefas from '~/components/TableTarefas';
import ModalCreate from '~/components/Modals/ModalItens/ModalCreate';
import ModalEdit from '~/components/Modals/ModalItens/ModalEdit';

import { Container, TableHeader, TableWapper, Box } from './styles';

export default function Itens() {
  // data
  const [itens, setItens] = useState([]);

  // page limit
  const pageLimit = 10;

  // initial form state
  const initialFormState = {
    id: '',
    todo_title: '',
    todo_text: '',
  };

  const [currentItem, setCurrentItem] = useState(initialFormState);

  // modal
  const [firstModal, toggleFirstModal] = useModali({
    closeButton: true,
    animated: true,
  });
  const [secondModal, toggleSecondModal] = useModali({
    closeButton: true,
    animated: true,
  });

  // get itens
  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getTodo();

      const { data } = response;

      setItens([...data]);
    }

    loadItens();
  }, []);

  // create
  const [btnDisable, setBtnDisable] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveItem = async () => {
    await DataService.createProducts(currentItem).then(response => {
      setCurrentItem(response.data);
    });
  };

  // update
  const updateItem = async (id, updatedContact) => {
    await DataService.updateProducts(currentItem.id, currentItem).then(
      response => {
        setItens(itens.map(item => (item.id === id ? updatedContact : item)));
      }
    );
    window.location.reload();
  };

  // edit
  const editRow = item => {
    toggleSecondModal();
    setCurrentItem(item);
    console.log('item item', item);
  };

  // delete
  const deleteItem = async id => {
    await DataService.removeProducts(id).then(response => {
      setItens(itens.filter(item => item.id !== itens.id));
    });
  };

  return (
    <>
      <Container>
        <TableWapper>
          <TableHeader>
            <h5>Clientes</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button onClick={toggleFirstModal} type="button">
              create
            </button>
          </TableHeader>
          <TableTarefas
            toggleSecondModal={toggleSecondModal}
            itens={itens}
            deleteItem={deleteItem}
            editRow={editRow}
          />
        </TableWapper>
        <h1>Tarefas</h1>
        <h4>Tarefas</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Box>
          <h5>Clientes</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <form action="post">
            <label htmlFor="text">
              name
              <input type="text" />
            </label>
          </form>
        </Box>
      </Container>
      <Modali.Modal {...firstModal}>
        <ModalCreate
          toggleFirstModal={toggleFirstModal}
          btnDisable={btnDisable}
          handleInputChange={handleInputChange}
          saveItem={saveItem}
          currentItem={currentItem}
        />
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        <ModalEdit
          currentItem={currentItem}
          updateItem={updateItem}
          handleInputChange={handleInputChange}
        />
      </Modali.Modal>
    </>
  );
}
