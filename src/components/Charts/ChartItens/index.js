import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function ChartItens(props) {
  return (
    <LineChart width={600} height={300} data={props.itens}>
      <Line type="monotone" dataKey="product_stock" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="product_name" />
      <YAxis />
    </LineChart>
  );
}

export default ChartItens;

// https://react-select.com/home
