import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import headerIamge from "../../Assest/Navigation/Header.png";
import setting from "../../Assest/Navigation/4-settings.png";
import "./header.css";
const HeaderComponent = ({ headerLabel,headerLabelIamges}) => {
  return (
    <>
      <Box className="header-container">
        <img
          src={headerIamge}
          alt=""
          style={{ height: "10em", width: "100%" }}
        />
        <Box
          position={"absolute"}
          top={70}
          display={"flex"}
          alignItems="center"
          padding={4}
          gap={2}
        >
          <img src={headerLabelIamges} alt="" />

          <Typography color={"white"} fontSize="1.2em">{headerLabel}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeaderComponent;
