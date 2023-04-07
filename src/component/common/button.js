import React from "react";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";

const CustomButton = ({
  isLargeAndLight,
  color,
  image,
  text,
  icon,
  variant,
  onClick,
}) => {
  return (
    <Button
      sx={{
        width: isLargeAndLight ? "165px" : "165px",
        height: "45px",
        background: color ? color : "darkblue",
        fontWeight: isLargeAndLight ? 700 : 400,
        fontSize: "14px",
        lineHeight: "19px",
        color: isLargeAndLight ? "black" : "white",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-evenly",
        marginInline: "10px",
      }}
      variant={variant}
      onClick={onClick}
    >
      {image ? <img src={image} alt="img" /> : <Icon>{icon}</Icon>}
      {text}
    </Button>
  );
};

export default CustomButton;
