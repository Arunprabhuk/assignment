import React from "react";
import PieCharts from "./charts/pieCharts";
import { COLORS2, data2 } from "../utilities/chartData";
import MapChart from "./charts/mapchart";

const FifthSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 0.4, display: "flex", flexWrap: "wrap" }}>
        <PieCharts data={data2} colors={COLORS2} isLegend />
      </div>
      <div style={{ flex: 0.6 }}>
        <MapChart />
      </div>
    </div>
  );
};

export default FifthSection;
