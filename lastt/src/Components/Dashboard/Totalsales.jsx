// import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    month: 'Jan',
    prodsold: 10
  },
  {
    month: 'Feb',
    prodsold: 20
  },
  {
    month: 'Mar',
    prodsold: 26
  },
  {
    month: 'Apr',
    prodsold: 32
  },
  {
    month: 'May',
    prodsold: 41
  },
  {
    month: 'June',
    prodsold: 35
  },
  {
    month: 'July',
    prodsold: 51
  },
  {
    month: 'Aug',
    prodsold: 49
  },
  {
    month: 'Sept',
    prodsold: 62
  },
  {
    month: 'Oct',
    prodsold: 69
  },
  {
    month: 'Nov',
    prodsold: 91
  },
  {
    month: 'Dec',
    prodsold: 149
  },
];

export default function App() {
  return (
    <AreaChart
      width={500}
      height={270}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area /*type="monotone"*/ dataKey="prodsold" stroke="#209292" fill="#88c0c0" fillOpacity={0.4} strokeWidth={3} />
    </AreaChart>
  );
}
