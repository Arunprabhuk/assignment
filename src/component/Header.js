import React from "react";
import CustomButton from "./common/button";
import flipkart from "../assets/image/flipkart.png";
import avatar from "../assets/image/avatar.png";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div
      style={{
        width: "97%",
        height: "100px",
        padding: "5px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        paddingTop: "15px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <CustomButton
        isLargeAndLight
        color="#f3f3f3"
        text={"Flipkart"}
        image={flipkart}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CustomButton
          isLargeAndLights
          color="linear-gradient(100.71deg, #E9B435 17.29%, #202124 260.67%)"
          text={"Premium"}
          icon={"diamond"}
        />
        <CustomButton
          isLargeAndLight
          color="#f3f3f3"
          text={"Help Desk"}
          icon={"support_agent"}
        />
        <Avatar alt="user" src={avatar} />
      </div>
    </div>
  );
};

export default Header;
