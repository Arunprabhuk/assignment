import React, { useCallback, useState } from "react";
import CommonCard from "./common/card";
import { thirdCardData } from "../utilities/cardData";
import PieCharts from "./charts/pieCharts";
import { COLORS1, COLORS3, data1, data3 } from "../utilities/chartData";
import { Card, CardContent, Typography } from "@mui/material";

const ThirdSection = () => {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
      <div
        style={{
          flex: 0.4,
          display: "grid",
          gridTemplateAreas: `"first second "
                             "first third"`,
          background: "#EAF9FF",
          paddingBlock: "15px",
          height: "330px",
          width: "518px",
          gap: "5px",
          padding: "5px",
        }}
      >
        <Card style={{ gridArea: "first", background: "#40CE0E" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>2</h1>
            <Typography>GCP</Typography>
          </CardContent>
        </Card>
        <Card style={{ gridArea: "second", background: "#8743DD" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>6</h1>
            <Typography>AWS</Typography>
          </CardContent>
        </Card>
        <Card style={{ gridArea: "third", background: "#FF8F28" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>6</h1>
            <Typography>Azure</Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ flex: 0.6 }}>
        <PieCharts data={data3} colors={COLORS3} isLegend />
      </div>
    </div>
  );
};

export default ThirdSection;
