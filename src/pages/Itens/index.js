import React, { useState, useEffect, useMemo } from 'react';
import {
  format,
  getMonth,
  parseISO,
  // subDays,
  // addDays,
  // setHours,
  // setMinutes,
  // setSeconds,
  // setMilliseconds,
  // isBefore,
  // isEqual,
  // parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { CSVLink } from 'react-csv';

import Modali, { useModali } from 'modali';
import DataService from '~/services/allServices';

import TableItens from '~/components/TableItens';

import ModalCreate from '~/components/Modals/ModalItens/ModalCreate';
import ModalEdit from '~/components/Modals/ModalItens/ModalEdit';

import ChartItens from '~/components/Charts/ChartItens';

import { Container, TableHeader, TableWapper } from './styles';

export default function Itens() {
  // const [loading, setLoading] = useState(true);

  // date
  const monthNow = new Date();
  const month = monthNow.toLocaleString('default', { month: 'short' });
  console.log('monthNow', month);

  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM 'de' Y HH:mm:ss", { locale: pt }),
    [date]
  );

  console.log('date', date);
  console.log('dateFormatted', dateFormatted);

  // data
  const [itens, setItens] = useState([]);

  const z = itens.map(x =>
    parseISO(x.createdAt).toLocaleString('default', { month: 'short' })
  );

  console.log('xa', z);

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
    }

    loadItens();
  }, []);

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
        <h1>Itens</h1>
        <h4>Produtos cadastrados</h4>
        <p>
          Aqui você encontra todos os seus itens do seu inventário. Adcione,
          exclua, edite e delete o que você quiser, o que você precisar.
        </p>
        <ChartItens itens={itens} />
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
              Cadastrar novo item
            </button>
            <CSVLink data={itens}>Download CVS</CSVLink>
            <form className="search">
              <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
              />
            </form>
            {itens.length ? (
              <div>
                <p>
                  Total de itens cadastrados: <strong>{itens.length}</strong>
                </p>
              </div>
            ) : (
              <p className="search-result-none">Carregando...</p>
            )}
          </TableHeader>
          <TableItens
            toggleSecondModal={toggleSecondModal}
            itens={results}
            deleteItem={deleteItem}
            editRow={editRow}
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

// class PostSection extends React.Component {
//   static defaultProps = {
//     posts: [],
//     title: '',
//     limit: 12,
//     showLoadMore: true,
//     loadMoreTitle: 'VER MAIS',
//     perPageLimit: 12
//   }

//   state = {
//     limit: this.props.limit
//   }

//   increaseLimit = () =>
//     this.setState(prevState => ({
//       limit: prevState.limit + this.props.perPageLimit
//     }))

//   render() {
//     const { posts, title, showLoadMore, loadMoreTitle } = this.props,
//       { limit } = this.state,
//       visiblePosts = posts.slice(0, limit || posts.length)

//     return (
//       <div className="post-section">
//         {title && <h2>{title}</h2>}
//         {!!visiblePosts.length && (
//           <div className="post-section-wrapper">
//             {visiblePosts.map((post, index) =>
//               post.status == "Ad"
//               ? <AdCard key={post.title + index} {...post} />
//               : <PostCard key={post.title + index} {...post} />
//               )}
//           </div>
//         )}
//         {showLoadMore && visiblePosts.length < posts.length && (
//           <div className="ver-mais">
//             <button onClick={this.increaseLimit}>
//               {loadMoreTitle}
//             </button>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// export default PostSection
