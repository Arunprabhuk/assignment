import React from "react";
import CommonCard from "./common/card";
import { cardData } from "../utilities/cardData";
import { Box } from "@mui/material";
const SecondSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingTop: "15px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {cardData.map(({ title, subTitle, count, color }) => {
        return (
          <CommonCard
            title={title}
            subTitle={subTitle}
            count={count}
            color={color}
          />
        );
      })}
    </Box>
  );
};

export default SecondSection;
