import React, { useState, useEffect } from 'react';
// import { format, getMonth, parseISO } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
// import pt from 'date-fns/locale/pt';

import { CSVLink } from 'react-csv';

import Modali, { useModali } from 'modali';
import DataService from '~/services/allServices';

import TableItens from '~/components/TableItens';

import ModalCreate from '~/components/Modals/ModalItens/ModalCreate';
import ModalEdit from '~/components/Modals/ModalItens/ModalEdit';

import ChartItens from '~/components/Charts/ChartItens';

import { Container, TableHeader, TableWapper } from './styles';

export default function Itens() {
  // date
  // const monthNow = new Date();
  // const month = monthNow.toLocaleString('default', { month: 'short' });
  // console.log('monthNow', month);

  // const [date, setDate] = useState(new Date());

  // const dateFormatted = useMemo(
  //   () => format(date, "d 'de' MMMM 'de' Y HH:mm:ss", { locale: pt }),
  //   [date]
  // );

  // console.log('date', date);
  // console.log('dateFormatted', dateFormatted);

  // data
  const [itens, setItens] = useState([]);

  // const z = itens.map(x =>
  //   parseISO(x.createdAt).toLocaleString('default', { month: 'short' })
  // );

  // console.log('xa', z);

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

  // get item
  const [currentItem, setCurrentItem] = useState(initialFormState);

  // modal
  const [firstModal, toggleFirstModal] = useModali({
    closeButton: true,
    animated: true,
    centered: true,
  });
  const [secondModal, toggleSecondModal] = useModali({
    closeButton: true,
    animated: true,
    centered: true,
  });

  // search
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const results = !searchValue
    ? itens
    : itens.filter(item =>
        item.product_name.toLowerCase().includes(searchValue.toLowerCase())
      );

  // get itens
  useEffect(() => {
    async function loadItens() {
      const response = await DataService.getProducts();

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
        <h1>Itens e Produtos</h1>
        <p>
          Aqui você encontra todos os seus itens cadastrados. Adicione, exclua,
          edite e delete o que você quiser, quando quiser. Logo abaixo, você
          acompanha todo o seu estoque com a precisão dos gráficos.
          <br />
          <br />
          Itens? Produtos? Indenpendente do termo, tenha total controle do seu
          estoque, de qualquer espécie, com o seu próprio banco de dados. Você
          poed adicionar, excluir, editar e deletar quantos itens quiser.
        </p>
        <TableHeader>
          <p>
            <strong>Cadastrar um novo item.</strong>
          </p>
          <button className="bnt-add" onClick={toggleFirstModal} type="button">
            Adicionar
          </button>
        </TableHeader>
        <TableHeader>
          <p>
            <strong>
              Salve o seu banco de dados em CVS.
              <br />
              Acesse em qualquer aplicativo de planilhas.
            </strong>
          </p>
          <button type="button" className="bnt-csv">
            <CSVLink data={itens}>Download CVS</CSVLink>
          </button>
        </TableHeader>
        <TableWapper>
          <p>Meu banco de dados.</p>
          <form className="search">
            <input
              value={searchValue}
              onChange={handleSearchInputChanges}
              placeholder="Encontre o item que você está procurando pelo nome..."
              type="text"
            />
          </form>
          {itens.length ? (
            <div>
              <p className="search-result-none">
                Total de itens cadastrados: <strong>{itens.length}</strong>
              </p>
            </div>
          ) : (
            <p className="search-result-none">Carregando...</p>
          )}
          <TableItens
            toggleSecondModal={toggleSecondModal}
            itens={results}
            deleteItem={deleteItem}
            editRow={editRow}
          />
        </TableWapper>
        <ChartItens itens={itens} />
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
