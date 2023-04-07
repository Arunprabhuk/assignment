import React from "react";
import logo from "../assets/image/logo.png";
import SideNavItems from "../component/sideNavItems";
const SideNav = () => {
  return (
    <div
      style={{
        flex: 0.2,
        height: "100vh",
        padding: "0px 20px",
        backgroundColor: "#f8f8f8",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "70px",
          background: "#ffffff",
          marginBlock: 15,
          paddingBlock: 15,
          backgroundSize: "cover",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        }}
      >
        <img src={logo} style={{ padding: 5 }} />
      </div>
      <SideNavItems />
    </div>
  );
};

export default SideNav;
