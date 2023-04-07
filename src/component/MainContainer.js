import React from "react";
import Header from "./Header";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FinalSection from "./FinalSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";

const MainContainer = () => {
  return (
    <div
      style={{
        flex: 0.8,
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: " 100px 300px 500px 500px 500px",
        gap: "15px",
        backgroundColor: "#F8F8F8",
        marginBlock: 5,
      }}
    >
      <Header />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <FinalSection />
    </div>
  );
};

export default MainContainer;
