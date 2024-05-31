// import "./styles.css";
import React from "react";
import { RadialBarChart,Legend, RadialBar,Tooltip } from "recharts";

const data = [
  {
    name: 2003,
    products:2478,
    fill: '#8884d8',
  },
  {
    name: 2008,
    products:5267,
    fill: '#83a6ed'
  },
  {
    name: 2013,
    products:734,
    fill: '#8dd1e1'
  },
  {
    name: 2018,
    products:784,
    fill: '#82ca9d',
  },
  {
    name: 2023,
    products: 433,
    fill: '#a4de6c',
  },
  
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function App() {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={15}
      outerRadius={100}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "black" }}
        background
        clockWise
        dataKey="products"
      />
      <Tooltip/>
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
