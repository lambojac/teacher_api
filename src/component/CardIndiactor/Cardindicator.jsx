import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./cardindicator.css";
import TabelComponent from "../TabelComponent/TabelComponent";
import { monthData } from "../../utils/fakedata/fakedata";

const Cardindicator = ({
  chartEnable = false,
  setTitle,
  setDetails,
  darkTheme = true,
  tableHead
}) => {
  return (
    <Box className="card-with-indicator-container">
      <Box className="card-with-indicator-main">
        <Box
          className="card-with-indicator-label-container"
          sx={{
            backgroundColor: darkTheme ? "rgb(18, 88, 240)" : "#ebad00",
          }}
        >
          <Typography
            textAlign={"left"}
            variant="h6"
            color={darkTheme ? "white" : "black"}
          >
            {setTitle}
          </Typography>
          <Typography
            textAlign={"left"}
            variant="body1"
            color={darkTheme ? "white" : "black"}
          >
            {setDetails}
          </Typography>
        </Box>
      </Box>
      {!chartEnable && 
      <Box padding={4}>
        <TabelComponent tableType={"result"} tableHead={monthData}/>
       </Box>}
    </Box>
  );
};

export default Cardindicator;
