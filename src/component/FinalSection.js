import React from "react";
import BarCharts from "./charts/barChart";

const FinalSection = () => {
  return (
    <div
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BarCharts />
    </div>
  );
};

export default FinalSection;
