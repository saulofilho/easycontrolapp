import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Modali, { useModali } from 'modali';

import DataService from '~/services/allServices';

import ModalCreate from '~/components/Modals/ModalToDo/ModalCreate';
import ModalEdit from '~/components/Modals/ModalToDo/ModalEdit';

import { Container } from './styles';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  // data
  const [todos, setTodos] = useState([]);

  // initial form state
  const initialFormState = {
    id: '',
    todo_title: '',
    todo_text: '',
    todo_done: true,
  };

  // get todo
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

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
    ? todos
    : todos.filter(todo =>
        todo.todo_title.toLowerCase().includes(searchValue.toLowerCase())
      );

  // get todo
  useEffect(() => {
    async function loadCalendar() {
      const response = await DataService.getCalendar();

      const { data } = response;

      setTodos([...data]);
    }

    loadCalendar();
  }, []);

  // create
  const [btnDisable, setBtnDisable] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBtnDisable(e.target.value);
    setCurrentTodo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveTodo = async () => {
    await DataService.createTodo(currentTodo).then(response => {
      setCurrentTodo(response.data);
    });
  };

  // update
  const updateTodo = async (id, updatedContact) => {
    await DataService.updateTodo(currentTodo.id, currentTodo).then(response => {
      setTodos(todos.map(todo => (todo.id === id ? updatedContact : todo)));
    });
    window.location.reload();
  };

  // edit
  const editRow = todo => {
    toggleSecondModal();
    setCurrentTodo(todo);
  };

  // delete
  const deleteTodo = async id => {
    await DataService.removeTodo(id).then(response => {
      setTodos(todos.filter(todo => todo.id !== todos.id));
    });
  };

  const events = [
    {
      title: 'My event',
      allDay: true,
      start: moment().toDate(),
      end: moment()
        .add(4, 'hours')
        .toDate(),
    },
  ];

  // state = {
  //   events: [
  //     {
  //       start: moment().toDate(),
  //       end: moment().add(1, "days").toDate(),
  //       title: "Some title",
  //     },
  //   ],
  // };

  // onEventResize = (data) => {
  //   const { start, end } = data;

  //   this.setState((state) => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     return { events: state.events };
  //   });
  // };

  // onEventDrop = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <Container>
        <h1>Calendário</h1>
        <p>
          xxx
          <br />
          <br />
          xxx
        </p>
        <DragAndDropCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            minHeight: '720px',
          }}
          // onEventDrop={this.onEventDrop}
          // onEventResize={this.onEventResize}
          selectable
          resizable
          defaultView="month"
          defaultDate={moment().toDate()}
          showMultiDayTimes
        />
        {/* <ChartTodDo todos={todos} /> */}
      </Container>
      <Modali.Modal {...firstModal}>
        <ModalCreate
          toggleFirstModal={toggleFirstModal}
          btnDisable={btnDisable}
          handleInputChange={handleInputChange}
          saveTodo={saveTodo}
          currentTodo={currentTodo}
        />
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        <ModalEdit
          currentTodo={currentTodo}
          updateTodo={updateTodo}
          handleInputChange={handleInputChange}
        />
      </Modali.Modal>
    </>
  );
}
