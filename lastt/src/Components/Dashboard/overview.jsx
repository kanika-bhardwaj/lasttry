// import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    year:2017,
    sales: 50,
    revenue:90
  },
  {
    year:2018,
    sales: 75,
    revenue:65
  },
  {
    year:2019,
    sales: 78,
    revenue:63,
  },
  {
    year:2020,
    sales: 50,
    revenue:40
  },
  {
    year:2021,
    sales: 75,
    revenue:65
  },
  {
    year:2022,
    sales: 65,
    revenue:45
  },
  {
    year:2023,
    sales: 75,
    revenue:60
  },
  // {
  //   name: "Page B",
  //   uv: 3000,
  //   pv: 1398,
  //   amt: 2210
  // },
  // {
  //   name: "Page C",
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290
  // },
  // {
  //   name: "Page D",
  //   uv: 2780,
  //   pv: 3908,
  //   amt: 2000
  // },
  // {
  //   name: "Page E",
  //   uv: 1890,
  //   pv: 4800,
  //   amt: 2181
  // },
  // {
  //   name: "Page F",
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500
  // },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100
  // }
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart className="chart-hh" data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey="year" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#78178f"
        strokeWidth={3}
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="revenue" stroke="#22c1c3" strokeWidth={3} activeDot={{ r: 8 }}/>
    </LineChart>
    </ResponsiveContainer>
  );
}
