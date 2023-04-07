import { Circle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Cell, Legend, Pie, PieChart, Sector } from "recharts";

const PieCharts = ({ data, colors, isLegend, isMultiple }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    return (
      <g>
        <text
          style={{ color: "black" }}
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
        >
          Assets
        </text>
        <text x={cx} y={cy} dy={28} textAnchor="middle" fill={fill}>
          4000
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };
  const renderCusomizedLegend = (props) => {
    const { payload } = props;
    return (
      <div style={{}}>
        {data.map((entry) => {
          const { dataKey, color } = entry;
          let style = {};
          console.log(entry);
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingBlock: 5,
              }}
            >
              <img src={entry.img} />
              <Circle fontSize="5px" style={{ fill: entry.color }} />
              <Typography>{entry.name}</Typography> -{" "}
              <Typography>{entry.value}</Typography>
            </div>
          );
        })}
      </div>
    );
  };
  const style = {
    top: 109,
    left: 350,
    lineHeight: "24px",
  };
  return (
    <PieChart
      width={700}
      height={400}
      style={{ display: "flex", alignItems: "center", position: "relative" }}
    >
      {isMultiple ? (
        <>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={100}
            cy={200}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={300}
            cy={200}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={500}
            cy={200}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </>
      ) : (
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      )}

      {isLegend && (
        <Legend
          iconSize={10}
          width={200}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          iconType="circle"
          wrapperStyle={style}
          content={renderCusomizedLegend}
        />
      )}
    </PieChart>
  );
};

export default PieCharts;
