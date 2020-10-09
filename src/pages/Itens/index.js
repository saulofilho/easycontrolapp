import React, { useState, useEffect } from 'react';
import Modali, { useModali } from 'modali';
import SearchField from 'react-search-field';
import TypeChecker from 'typeco';
import Paginator from 'react-hooks-paginator';
import DataService from '~/services/allServices';
import TableItens from '~/components/TableItens';
import ModalCreate from '~/components/Modals/ModalItens/ModalCreate';
import ModalEdit from '~/components/Modals/ModalItens/ModalEdit';

import { Container, TableHeader, TableWapper, Box } from './styles';

export default function Itens() {
  // data
  const [itens, setItens] = useState([]);

  // paginator
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  // search
  const [search, setSearch] = useState('');

  // page limit
  const pageLimit = 10;

  // initial form state
  const initialFormState = {
    id: '',
    product_name: '',
    product_info: '',
    product_department: '',
    product_color: '',
    product_material: '',
    product_price: '',
    product_stock: '',
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
      const response = await DataService.getProducts();

      const { data } = response;

      setItens([...data]);
      setSearch(data);
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

  // search
  const getMatchedList = searchText => {
    if (TypeChecker.isEmpty(searchText)) return itens;

    // console.log('itens', itens);

    return itens.filter(item =>
      item.product_name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const onChange = value => {
    setSearch(getMatchedList(value));
  };

  // console.log('currentData', currentData);

  // console.log('search', search);

  // paginator
  useEffect(() => {
    setCurrentData(itens.slice(offset, offset + pageLimit));
  }, [offset, itens]);

  return (
    <>
      <Container>
        <h1>Itens</h1>
        <h4>Produtos cadastrados</h4>
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
        <TableWapper>
          <TableHeader>
            <h5>Lista dos produtos</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button
              className="bnt-add"
              onClick={toggleFirstModal}
              type="button"
            >
              Cadastrar um novo item
            </button>
            <SearchField
              placeholder="Busque por palavras-chave"
              classNames="search"
              onChange={onChange}
            />
          </TableHeader>
          <TableItens
            toggleSecondModal={toggleSecondModal}
            itens={search}
            deleteItem={deleteItem}
            editRow={editRow}
          />
          <Paginator
            totalRecords={itens.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </TableWapper>
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
