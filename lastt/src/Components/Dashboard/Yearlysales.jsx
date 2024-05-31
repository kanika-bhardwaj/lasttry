import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    year: 2000,
    sales: 2478
  },
  {
    year: 2005,
    sales: 5267
  },
  {
    year: 2010,
    sales: 734
  },
  {
    year: 2015,
    sales: 784
  },
  {
    year: 2020,
    sales: 433
  },
];

export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey='sales'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
