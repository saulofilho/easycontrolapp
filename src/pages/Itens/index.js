import React, { useState, useEffect } from 'react';
import Modali, { useModali } from 'modali';
import SearchField from 'react-search-field';
import TypeChecker from 'typeco';
import Paginator from 'react-hooks-paginator';
import DataService from '~/services/allServices';
import TableItens from '~/components/TableItens';
import ModalCreate from '~/components/Modals/ModalCreate';
import ModalEdit from '~/components/Modals/ModalEdit';

import { Container, Box } from './styles';

export default function Itens() {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itens, setItens] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [search, setSearch] = useState('');

  const pageLimit = 2;

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
    closeButton: false,
    animated: true,
  });
  const [secondModal, toggleSecondModal] = useModali({
    closeButton: false,
    animated: true,
  });

  return (
    <>
      <Container>
        <button onClick={toggleFirstModal} type="button">
          create
        </button>
        <SearchField
          placeholder="Busque por palavras-chave"
          classNames="search"
          onChange={onChange}
        />
        <TableItens toggleSecondModal={toggleSecondModal} itens={search} />
        <Paginator
          totalRecords={itens.length}
          pageLimit={pageLimit}
          pageNeighbours={2}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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
        <ModalCreate />
      </Modali.Modal>
      {/* <Modali.Modal {...secondModal}>
        <ModalEdit itens={currentData} toggleSecondModal={toggleSecondModal} />
      </Modali.Modal> */}
    </>
  );
}
