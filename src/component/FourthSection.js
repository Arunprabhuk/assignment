import React from "react";
import ChartRace from "react-chart-race";

const FourthSection = () => {
  const data = [
    {
      id: 0,
      title: "Firewall INGRESS ...",
      value: 2,
      color: "#008767",
    },
    { id: 1, title: "Instance without...", value: 5, color: "#43DD93" },
    {
      id: 2,
      title: "Not encrypted with...",
      value: 9,
      color: "#BB8E1B",
    },
    {
      id: 3,
      title: "Instance without...",
      value: 12,
      color: "#2894FF",
    },
    { id: 4, title: "Not encrypted with...", value: 3, color: "#FF9900" },
  ];
  return (
    <div
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {" "}
      <ChartRace
        data={data}
        backgroundColor="transparent"
        width={760}
        padding={12}
        itemHeight={58}
        gap={12}
        titleStyle={{
          font: "normal 400 13px Arial",
          color: "#000000",
        }}
        valueStyle={{
          font: "normal 400 11px Arial",
          color: "#000000",
        }}
      />
    </div>
  );
};

export default FourthSection;
