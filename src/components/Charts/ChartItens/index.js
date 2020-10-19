import React from 'react';
import { parseISO } from 'date-fns';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ComposedChart,
  Area,
  Bar,
  BarChart,
  AreaChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  PolarGrid,
  ReferenceLine,
} from 'recharts';

import { ContainerCharts, TextCharts } from './styles';

function ChartItens(props) {
  const dateFormatMonth = props.itens.map(date => {
    return {
      ...date,
      createdAt: parseISO(date.createdAt).toLocaleString('default', {
        month: 'short',
      }),
      updatedAt: parseISO(date.createdAt).toLocaleString('default', {
        month: 'short',
      }),
    };
  });

  return (
    <>
      <ContainerCharts>
        <TextCharts>
          Confira o estoque e o preço de cada item durante o ano.
        </TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={dateFormatMonth}>
            <Line type="monotone" dataKey="product_name" stroke="pink" />
            <Line type="monotone" dataKey="product_stock" stroke="darkblue" />
            <Line type="monotone" dataKey="product_price" stroke="darkgreen" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>PieChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart>
            <Pie
              data={dateFormatMonth}
              dataKey="product_stock"
              outerRadius={110}
              fill="lightblue"
              stroke="white"
              label={{ fill: 'gray', fontSize: '12px' }}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>
          Veja a movimentação por meses [fazer funcao q vai filtrar array por
          meses e colocar no react-select]{' '}
        </TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart
            layout="vertical"
            data={dateFormatMonth}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="createdAt" type="category" />
            <Tooltip />
            <Legend />
            <Line
              dataKey="product_stock"
              stroke="darkblue"
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="product_price"
              stroke="darkgreen"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>LineChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={props.itens}>
            <Line
              dataKey="product_stock"
              stroke="red"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="product_price"
              stroke="blue"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="product_name"
              stroke="blue"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>AreaChart</TextCharts>
        <ResponsiveContainer width="99%" height={40}>
          <AreaChart data={props.itens}>
            <Area dataKey="product_stock" stroke="red" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>AreaChart CartesianGrid</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <AreaChart
            data={props.itens}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              {/* <DefAreaValueColor
                id="splitColor"
                data={props.itens}
                positiveColor="red"
                negativeColor="ping"
              /> */}
            </defs>
            <Area dataKey="product_stock" stroke="red" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>PieChart q</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart>
            <Pie
              startAngle={180}
              endAngle={0}
              data={props.itens}
              dataKey="product_stock"
              stroke="red"
              fill="#8884d8"
              outerRadius={80}
              label={{ fill: 'red', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>BarChart CartesianGrid</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            data={props.itens}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="product_stock"
              stackId="a"
              fill="#8884d8"
              barSize={5}
            />
            <Bar
              dataKey="product_price"
              stackId="a"
              fill="#8884d8"
              barSize={5}
            />
          </BarChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>AreaChart CartesianGrid</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <AreaChart
            data={props.itens}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_stock" />
            <YAxis />
            <Tooltip />
            <Area
              dataKey="product_stock"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              dataKey="product_stock"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              dataKey="product_price"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>RadarChart PolarGrid</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <RadarChart outerRadius={150} data={props.itens}>
            <PolarGrid stroke="#8884d8" />
            <PolarAngleAxis dataKey="product_stock" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="product_price"
              stroke="red"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Radar
              name="Lily"
              dataKey="product_price"
              stroke="blue"
              fill="#8884d8"
              fillOpacity={0.3}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>LineChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart
            data={props.itens}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="product_price" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line dataKey="product_stock" stroke="red" />
            <Line dataKey="product_price" stroke="yellow" />
          </LineChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>BarChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            data={props.itens}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: 'red',
                border: `1px solid ${'red'}`,
                color: 'white',
              }}
            />
            <Legend wrapperStyle={{ color: 'red' }} />
            <Bar dataKey="product_stock" fill="red" barSize={5} />
            <Bar dataKey="product_price" fill="red" barSize={5} />
          </BarChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>AreaChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <AreaChart
            data={props.itens}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="product_stock" stroke="green" fill="blue" />
          </AreaChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>ComposedChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <ComposedChart
            data={props.itens}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid />
            <XAxis dataKey="product_stock" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area dataKey="product_stock" fill="red" stroke="red" />
            <Bar dataKey="product_stock" barSize={5} fill="red" />
            <Line dataKey="product_stock" stroke="white" activeDot={{ r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>BarChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            data={props.itens}
            stackOffset="sign"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="white" />
            <Bar
              dataKey="product_stock"
              fill="red"
              stackId="stack"
              barSize={5}
            />
            <Bar
              dataKey="product_stock"
              fill="red"
              stackId="stack"
              barSize={5}
            />
          </BarChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>BarChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            data={props.itens}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="product_stock"
              fill="red"
              background="blue"
              barSize={5}
            />
            <Bar dataKey="product_stock" fill="green" barSize={5} />
          </BarChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>LineChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart
            data={props.itens}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              dataKey="product_stock"
              stroke="white"
              // label={<ValueLabel />}
              activeDot={{ r: 5 }}
            />
            <Line dataKey="product_stock" stroke="red" activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>BarChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            data={props.itens}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_stock" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="product_stock" stackId="a" fill="red" barSize={5} />
            <Bar dataKey="product_stock" stackId="a" fill="red" barSize={5} />
            <Bar dataKey="product_stock" fill="blue" barSize={5} />
          </BarChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>AreaChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <AreaChart
            data={props.itens}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_stock" />
            <YAxis />
            <Tooltip />
            <Area
              dataKey="product_stock"
              stackId="1"
              stroke="white"
              fill="red"
            />
            <Area
              dataKey="product_stock"
              stackId="1"
              stroke="whote"
              fill="red"
            />
            <Area
              dataKey="product_stock"
              stackId="1"
              stroke="white"
              fill="red"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>line chart CartesianGrid</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart
            width={600}
            height={300}
            data={props.itens}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_stock" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              dataKey="product_stock"
              stroke="red"
              activeDot={{ r: 5 }}
              strokeDasharray="5 5"
            />
            <Line
              dataKey="product_stock"
              stroke="red"
              activeDot={{ r: 5 }}
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </ResponsiveContainer>
      </ContainerCharts>
      <ContainerCharts>
        <TextCharts>BarChart</TextCharts>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart
            width={600}
            height={300}
            data={props.itens}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_stock" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="white" />
            <Bar dataKey="product_stock" fill="red" barSize={5} />
            <Bar dataKey="product_stock" fill="red" barSize={5} />
          </BarChart>
        </ResponsiveContainer>
      </ContainerCharts>
    </>
  );
}

export default ChartItens;
