import React from 'react';
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
  Cell,
  BarChart,
  AreaChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  PolarGrid,
} from 'recharts';

const COLORS = ['green', 'red', 'yellow'];

function ChartItens(props) {
  return (
    <>
      <div className="chart-wrapper">
        <h4>titulo teste</h4>
        <p>teste texto</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={props.itens}>
            <Line type="monotone" dataKey="product_stock" stroke="lightblue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="createdAt" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart>
            <Pie
              data={props.itens}
              dataKey="product_stock"
              outerRadius={67}
              fill="yellowgreen"
              stroke="white"
            />
            <Pie
              data={props.itens}
              dataKey="product_stock"
              innerRadius={70}
              outerRadius={80}
              fill="lightblue"
              stroke="white"
              label={{ fill: 'gray', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart
            layout="vertical"
            data={props.itens}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="product_stock" type="category" />
            <Tooltip />
            <Legend />
            <Line dataKey="product_stock" stroke="red" activeDot={{ r: 5 }} />
            <Line dataKey="product_price" stroke="blue" activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <ComposedChart
            layout="vertical"
            width={600}
            height={400}
            data={props.itens}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid />
            <XAxis type="number" />
            <YAxis dataKey="product_name" type="category" />
            <Tooltip />
            <Legend />
            <Area dataKey="product_price" fill="red" stroke="blue" />
            <Bar dataKey="product_price" barSize={5} fill="yellow" />
            <Line
              dataKey="product_stock"
              stroke="orange"
              activeDot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart>
            <Pie
              data={props.itens}
              dataKey="product_stock"
              fill="orange"
              stroke="white"
              outerRadius={67}
            />
            <Pie
              data={props.itens}
              dataKey="product_stock"
              innerRadius={70}
              outerRadius={80}
              fill="red"
              stroke="white"
              label={{ fill: 'gray', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart width={30} height={30}>
            <Pie
              data={props.itens}
              dataKey="product_stock"
              fill="orange"
              stroke="white"
              outerRadius={90}
            >
              {props.itens.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <LineChart data={props.itens}>
            <Line
              dataKey="product_stock"
              stroke="red"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <PieChart>
            <Pie
              data={props.itens}
              dataKey="product_stock"
              stroke="red"
              fill="#8884d8"
              innerRadius={90}
              outerRadius={105}
            >
              {props.itens.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
          <BarChart data={props.itens}>
            <Bar dataKey="product_stock" fill="#8884d8" barSize={5} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="99%" height={40}>
          <AreaChart data={props.itens}>
            <Area dataKey="product_stock" stroke="red" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
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
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
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
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
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
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
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
      </div>
      <div className="chart-wrapper">
        <h4>titulo teste 2</h4>
        <p>teste texto 2</p>
        <ResponsiveContainer width="100%" aspect={1 / 1}>
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
      </div>
    </>
  );
}

export default ChartItens;

{
  /* <ResponsiveContainer width="100%" aspect={1 / 1}>
  <RadialBarChart
    cx={150}
    innerRadius={20}
    outerRadius={140}
    barSize={7}
    data={data}
  >
    <RadialBar
      minAngle={15}
      label={{ position: 'insideStart', fill: colors['900'], fontSize: '11px' }}
      background={{ fill: colors['200'] }}
      clockWise
      dataKey="uv"
    />
    <Legend
      iconSize={10}
      layout="vertical"
      verticalAlign="middle"
      wrapperStyle={style}
    />
  </RadialBarChart>
</ResponsiveContainer>;

<ResponsiveContainer
  width="100%"
  className={className}
  {...(!_.isUndefined(height)
    ? {
        height,
      }
    : {
        aspect: 2 / 1,
      })}
>
  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line
      dataKey="pv"
      stroke={colors.primary}
      dot={generateDot}
      activeDot={generateActiveDot}
    />
    <Line
      dataKey="uv"
      stroke={colors.purple}
      dot={generateDot}
      activeDot={generateActiveDot}
    />
  </LineChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip
      contentStyle={{
        background: colors['900'],
        border: `1px solid ${colors['900']}`,
        color: colors.white,
      }}
    />
    <Legend wrapperStyle={{ color: colors['900'] }} />
    <Bar dataKey="pv" fill={colors.primary} barSize={5} />
    <Bar dataKey="uv" fill={colors.purple} barSize={5} />
  </BarChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area dataKey="uv" stroke={colors.primary} fill={colors['primary-02']} />
  </AreaChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <BarChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <ReferenceLine y={0} stroke={colors['400']} />
    <Bar dataKey="pv" fill={colors.primary} barSize={5} />
    <Bar dataKey="uv" fill={colors.purple} barSize={5} />
  </BarChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <PieChart>
    <Pie
      data={data}
      dataKey="value"
      innerRadius={70}
      stroke={colors.white}
      outerRadius={80}
      startAngle={180}
      endAngle={0}
      fill="#8884d8"
      paddingAngle={1}
    >
      {data.map((entry, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <PieChart>
    <Pie
      data={data}
      dataKey="value"
      stroke={colors.white}
      innerRadius={70}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={1}
    >
      {data.map((entry, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area
      dataKey="uv"
      stackId="1"
      stroke={colors.purple}
      fill={colors['purple-03']}
    />
    <Area
      dataKey="pv"
      stackId="1"
      stroke={colors.primary}
      fill={colors['primary-03']}
    />
    <Area
      dataKey="amt"
      stackId="1"
      stroke={colors.success}
      fill={colors['success-03']}
    />
  </AreaChart>
</ResponsiveContainer>;

<ResponsiveContainer width="100%" aspect={6.0 / 3.0}>
  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="female" stackId="a" fill={colors.purple} barSize={5} />
    <Bar dataKey="male" stackId="a" fill={colors.primary} barSize={5} />
    <Bar dataKey="uv" fill={colors.success} barSize={5} />
  </BarChart>
</ResponsiveContainer>;

<ResponsiveContainer width='100%' aspect={6.0/3.0}>
<LineChart data={data}
    margin={{top: 15, right: 30, left: 20, bottom: 5}}>
   <XAxis dataKey="name"/>
   <YAxis/>
   <CartesianGrid strokeDasharray="3 3"/>
   <Tooltip/>
   <Legend />
   <Line dataKey="pv" stroke={ colors['primary'] } label={ <ValueLabel /> } activeDot={{r: 5}} dot={generateDot} />
   <Line dataKey="uv" stroke={ colors['purple'] } activeDot={{r: 5}} dot={generateDot} />
</LineChart>
</ResponsiveContainer>

<ResponsiveContainer
width='100%'
minHeight='250px'
className={ className }
{...(!_.isUndefined(height) ? {
    height
} : {
    aspect: 2 / 1
})}
>
<ComposedChart data={data}
    margin={{top: 5, right: 20, left: 20, bottom: 5}}>
  <CartesianGrid />
  <XAxis dataKey="name"/>
  <YAxis />
  <Tooltip />
  <Legend />
  <Area dataKey='amt' fill={ colors['200'] } stroke={ colors['400'] } />
  <Bar dataKey='pv' barSize={ 5 } fill={ colors['primary'] } />
  <Line dataKey='uv' stroke={ colors['purple'] } activeDot={{r: 5}} dot={generateDot} />
</ComposedChart>
</ResponsiveContainer>

<ResponsiveContainer width='100%' aspect={6.0/3.0}>
<LineChart width={600} height={300} data={data}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
   <CartesianGrid strokeDasharray="3 3"/>
   <XAxis dataKey="name"/>
   <YAxis/>
   <Tooltip/>
   <Legend />
   <Line dataKey="pv" stroke={ colors['primary'] } activeDot={{r: 5}} dot={generateDot} strokeDasharray="5 5" />
   <Line dataKey="uv" stroke={ colors['purple'] } activeDot={{r: 5}} dot={generateDot} strokeDasharray="3 4 5 2" />
</LineChart>
</ResponsiveContainer>

<ResponsiveContainer width='100%' aspect={6.0/3.0}>
<BarChart data={data} stackOffset="sign"
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
   <CartesianGrid strokeDasharray="3 3"/>
   <XAxis dataKey="name"/>
   <YAxis/>
   <Tooltip/>
   <Legend />
   <ReferenceLine y={0} stroke={ colors['400'] } />
   <Bar dataKey="pv" fill={ colors['primary'] } stackId="stack" barSize={ 5 } />
   <Bar dataKey="uv" fill={ colors['purple'] } stackId="stack" barSize={ 5 } />
</BarChart>
</ResponsiveContainer>

<ResponsiveContainer width='100%' aspect={6.0/3.0}>
<BarChart data={data}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
   <CartesianGrid strokeDasharray="3 3"/>
   <XAxis dataKey="name"/>
   <YAxis/>
   <Tooltip/>
   <Legend />
   <Bar dataKey="pv" fill={ colors['primary'] } background={{ fill: colors['200'] }} barSize={ 5 } />
   <Bar dataKey="uv" fill={ colors['purple'] } barSize={ 5 } />
</BarChart>
</ResponsiveContainer> */
}
