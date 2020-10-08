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

export default function Itens(props) {
  // initial form state
  const initialFormState = {
    id: null,
    product_name: '',
    product_info: '',
    product_department: '',
    product_color: '',
    product_material: '',
    product_price: '',
    product_stock: '',
  };

  const [currentItem, setCurrentItem] = useState(initialFormState);

  const [itens, setItens] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [search, setSearch] = useState('');

  const pageLimit = 10;

  // get
  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getProducts();

      const { data } = response;

      setItens(data);
      setSearch(data);
    }

    loadItens();
  }, []);

  // update
  const updateItem = async id => {
    await DataService.updateProducts(id, itens.id).then(response => {
      console('response update', response);
      setItens(itens.map(item => (item.id === id ? updateItem : item)));
    });
  };

  // edit
  const editRow = item => {
    setCurrentItem({
      id: item.id,
      product_name: item.name,
      product_nameinfo: item.info,
      product_department: item.department,
      product_color: item.color,
      product_material: item.material,
      product_price: item.price,
      product_stock: item.stock,
    });
  };

  // delete
  const deleteItem = async id => {
    await DataService.removeProducts(id).then(response => {
      console.log('response', response);

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

  // modal
  const [firstModal, toggleFirstModal] = useModali({
    closeButton: true,
    animated: true,
  });

  const [secondModal, toggleSecondModal] = useModali({
    closeButton: true,
    animated: true,
  });

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
            <SearchField
              placeholder="Busque por palavras-chave"
              classNames="search"
              onChange={onChange}
            />
          </TableHeader>
          <TableItens
            toggleSecondModal={toggleSecondModal}
            itens={currentData}
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
        <ModalCreate toggleFirstModal />
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        <ModalEdit currentItem={currentItem} updateItem={updateItem} />
      </Modali.Modal>
    </>
  );
}
