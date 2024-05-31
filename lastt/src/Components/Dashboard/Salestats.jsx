// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
{
  a: 0,
  cost: 133,
  revenue:408,
},
{
  a:100,
  cost:221,
  revenue:547,
},
{
  a:150,
  cost:783,
  revenue:675,
},
{
  a:200,
  cost:1809,
  revenue:657,
},
];

export default function App() {
  return (
    <ResponsiveContainer  width="100%" height="100%">
    <BarChart
    className="chart-hh"
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="a" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cost" stackId="a" fill="#39474c" />
      <Bar dataKey="revenue" stackId="a" fill="#1ca5d9" />
    </BarChart>
    </ResponsiveContainer>
  );
}
