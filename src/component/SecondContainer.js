import React from "react";
import Header from "./Header";
import SelectTableComponent from "./tableComponent";
import CardList from "./CardList";
import MiddleComponent from "./MiddleComponent";

const SecondContainer = () => {
  return (
    <div
      style={{
        flex: 0.8,
        marginBlock: 5,
        display: "grid",

        backgroundColor: "#F8F8F8",
        gridTemplateRows: " 100px 300px 500px 500px ",
        gap: "15px",
      }}
    >
      <Header />
      <CardList />
      <MiddleComponent />
      <SelectTableComponent />
    </div>
  );
};

export default SecondContainer;
