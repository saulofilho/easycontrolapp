import api from '~/services/api';

const getAll = () => {
  return api.get('/');
};

const getTodo = () => {
  return api.get('/todo');
};
const createTodo = data => {
  return api.post('/todo', data);
};
const updateTodo = (id, data) => {
  return api.put(`/todo/${id}`, data);
};
const removeTodo = id => {
  return api.delete(`/todo/${id}`);
};

const getCalendar = () => {
  return api.get('/calendar');
};
const createCalendar = data => {
  return api.post('/calendar', data);
};
const updateCalendar = (id, data) => {
  return api.put(`/calendar/${id}`, data);
};
const removeCalendar = id => {
  return api.delete(`/calendar/${id}`);
};

const getClients = () => {
  return api.get('/clients');
};
const createClients = data => {
  return api.post('/clients', data);
};
const updateClients = (id, data) => {
  return api.put(`/clients/${id}`, data);
};
const removeClients = id => {
  return api.delete(`/clients/${id}`);
};

const getReceive = () => {
  return api.get('/receive');
};
const createReceive = data => {
  return api.post('/receive', data);
};
const updateReceive = (id, data) => {
  return api.put(`/receive/${id}`, data);
};
const removeReceive = id => {
  return api.delete(`/receive/${id}`);
};

const getPay = () => {
  return api.get('/pay');
};
const createPay = data => {
  return api.post('/pay', data);
};
const updatePay = (id, data) => {
  return api.put(`/pay/${id}`, data);
};
const removePay = id => {
  return api.delete(`/pay/${id}`);
};

const getProducts = () => {
  return api.get('/products');
};
const createProducts = data => {
  return api.post('/products', data);
};
const updateProducts = (id, data) => {
  return api.put(`/products/${id}`, data);
};
const removeProducts = id => {
  return api.delete(`/products/${id}`);
};

const getCashflow = () => {
  return api.get('/cashflow');
};
const createCashflow = data => {
  return api.post('/cashflow', data);
};
const updateCashflow = (id, data) => {
  return api.put(`/cashflow/${id}`, data);
};
const removeCashflow = id => {
  return api.delete(`/cashflow/${id}`);
};

const getReminders = () => {
  return api.get('/reminders');
};
const createReminders = data => {
  return api.post('/reminders', data);
};
const updateReminders = (id, data) => {
  return api.put(`/reminders/${id}`, data);
};
const removeReminders = id => {
  return api.delete(`/reminders/${id}`);
};

export default {
  getAll,
  getTodo,
  createTodo,
  updateTodo,
  removeTodo,
  getCalendar,
  createCalendar,
  updateCalendar,
  removeCalendar,
  getClients,
  createClients,
  updateClients,
  removeClients,
  getReceive,
  createReceive,
  updateReceive,
  removeReceive,
  getPay,
  createPay,
  updatePay,
  removePay,
  getProducts,
  createProducts,
  updateProducts,
  removeProducts,
  getCashflow,
  createCashflow,
  updateCashflow,
  removeCashflow,
  getReminders,
  createReminders,
  updateReminders,
  removeReminders,
};
