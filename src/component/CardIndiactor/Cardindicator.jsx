import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./cardindicator.css";
import TabelComponent from "../TabelComponent/TabelComponent";
import { monthData, resultCellData } from "../../utils/fakedata/fakedata";
import Charts from "../Chart/Charts";
import ApexChart from "../ApexChart/ApexChart";
import { motion } from "framer-motion";

const Cardindicator = ({
  chartEnable = false,
  setTitle,
  setDetails,
  darkTheme = true,
  tableHead,
}) => {
  return (
    <motion.div
      initial={{x:-50, opacity: 0 }}
      animate={{
        opacity: 1,
        x:0,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="card-with-indicator-container">
        <Box className="card-with-indicator-main">
          <Box
            className="card-with-indicator-label-container"
            sx={{
              backgroundColor: darkTheme ? "rgb(18, 88, 240)" : "#ebad00",
              padding: "1em",
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
        {!chartEnable && (
          <Box padding={2}>
            <TabelComponent
              pagination={true}
              tableType={"passer"}
              cellData={resultCellData}
              tableHead={monthData}
            />
          </Box>
        )}
        {chartEnable && (
          // <ApexChart/>
          <Charts />
        )}
      </Box>
    </motion.div>
  );
};

export default Cardindicator;
