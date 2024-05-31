// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
{year: 2017, income: 100, outcome: 90},
{year: 2019, income: 75, outcome: 65},
{year: 2021, income: 60, outcome: 50},
{year: 2023, income: 82, outcome: 79},
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
    className="chart-hh"
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
      <ReferenceLine y={200} stroke="#000" />
      <Brush dataKey="year" height={20} stroke="#8884d8" />
      <Bar dataKey="income" fill="#1da5d0" strokeWidth={1}/>
      <Bar dataKey="outcome" fill="#ba5bd0" />
    </BarChart>
    </ResponsiveContainer>
  );
}
