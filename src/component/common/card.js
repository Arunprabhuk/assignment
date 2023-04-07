import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CommonCard = ({ title, subTitle, count, color }) => {
  return (
    <Card
      sx={{
        width: "178px",
        height: "196px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: color,
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: 600, fontSize: "18px", color: " #046387" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: 700, fontSize: "48px", color: " #046387" }}
        >
          {subTitle}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
          height: 38,
        }}
      >
        {count.length > 0 &&
          count.map((cl) => {
            return (
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  color: " #000000",
                  border: " 1px solid #BFBEBE",
                  width: "59px",
                  paddingTop: "10px",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                {cl}
              </Typography>
            );
          })}
      </CardContent>
    </Card>
  );
};

export default CommonCard;
