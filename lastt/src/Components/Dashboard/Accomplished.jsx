// import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";

const data = [
  // {
  //   Task: 'Task 0',
  // },
  {
    Task: 'Task 1',
    completed: 408,
    progress:133
  },
  {
    Task: 'Task 2',
    completed: 547,
    progress:221
  },
  {
    Task: 'Task 3',
    completed: 675,
    progress:783
  },
  {
    Task: 'Task 4',
    completed: 734,
    progress:2478
  },
];

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={280}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="Task" interval={'preserveStartEnd'} />
      <YAxis />
      
      {/* <Legend /> */}
      {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar dataKey="completed" barSize={30} fill="#667176" />
      <Bar dataKey="progress" barSize={30} fill="#667176" />
      <Tooltip/>
      <Line type="monotone" dataKey="completed" stroke="#d2148e" strokeWidth={3} activeDot={{r:8}}/>
      <Line type="monotone" dataKey="progress" stroke="#10608a" strokeWidth={3} />
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
  );
}
