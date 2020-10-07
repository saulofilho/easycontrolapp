// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState, useEffect } from 'react';
// // import MaskedInput from 'react-text-mask';
// import { Container, Form } from './styles';

// function ModalEdit({ itens = [] }) {
//   const [contact, setContact] = useState([currentContact]);

//   const handleInputChange = e => {
//     const { name, value } = e.target;

//     setContact({ ...contact, [name]: value });
//   };

//   useEffect(() => {
//     setContact(currentContact);
//   }, []);

//   return (
//     <Container>
//       <Form>
//         <p>Editar contato</p>
//         <label htmlFor="name">Nome</label>
//         <input
//           type="text"
//           id="namex"
//           placeholder="Nome Completo"
//           name="name"
//           value={contact.name}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="email">E-mail</label>
//         <input
//           type="text"
//           id="emailx"
//           placeholder="seu@email.com"
//           name="email"
//           value={contact.email}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="phone">Telefone</label>
//         {/* <MaskedInput
//           mask={[
//             '(',
//             /[1-9]/,
//             /\d/,
//             ')',
//             ' ',
//             /\d/,
//             /\d/,
//             /\d/,
//             /\d/,
//             '-',
//             /\d/,
//             /\d/,
//             /\d/,
//             /\d/,
//           ]}
//           type="text"
//           id="phone2"
//           placeholder="(01) 2345-6789"
//           name="phone"
//           value={contact.phone}
//           onChange={handleInputChange}
//         /> */}
//         <input
//           type="text"
//           id="phone2"
//           placeholder="(01) 2345-6789"
//           name="phone"
//           value={contact.phone}
//           onChange={handleInputChange}
//         />
//         <div className="buttons">
//           <button
//             className="cancelar"
//             type="button"
//             onClick={props.toggleSecondModal}
//           >
//             Cancelar
//           </button>
//           <button
//             className="salvar"
//             type="button"
//             onClick={e => {
//               e.preventDefault();
//               props.updateContact(contact.id, contact);
//             }}
//           >
//             Salvar
//           </button>
//         </div>
//       </Form>
//     </Container>
//   );
// }

// export default ModalEdit;
