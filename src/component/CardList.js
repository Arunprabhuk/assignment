import React from "react";
import CommonCard from "./common/card";
import { fourthCardData } from "../utilities/cardData";

const CardList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "15px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {fourthCardData &&
        fourthCardData.map((cl, index) => {
          return (
            <CommonCard
              title={cl.title}
              subTitle={cl.subTitle}
              color={cl.color}
              count={cl.count}
            />
          );
        })}
    </div>
  );
};

export default CardList;
