import React from "react";
import { BarChart, Bar, Cell, XAxis, LabelList } from "recharts";
import { COLORS1, data1 } from "../../utilities/chartData";

const data = [
  {
    name: "Firewall INGRESS ...",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Instance without...",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Not encrypted with...",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Instance without...",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Not encrypted with...",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function BarCharts() {
  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;
    console.log(props);
    return (
      <g>
        <circle
          cx={x + width / 2}
          cy={y - radius}
          r={radius}
          fill="transparent"
        />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          2
        </text>
      </g>
    );
  };
  return (
    <BarChart width={1040} height={370} data={data}>
      <XAxis dataKey="name" />
      <Bar dataKey="uv">
        {data1.map((entry, index) => (
          <Cell
            width={80}
            cursor="pointer"
            key={`cell-${index}`}
            fill={COLORS1[index % COLORS1.length]}
          />
        ))}
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  );
}
