import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import './cardindicator.css'
const Cardindicator = ({setTitle,setDetails,darkTheme=true}) => {
  return (
    <Box  className="card-with-indicator-container">
          <Box className="card-with-indicator-main">
            <Box
              className="card-with-indicator-label-container"
              sx={{
                backgroundColor:darkTheme?"rgb(18, 88, 240)":"#ebad00"
              }}
            >
              <Typography textAlign={"left"} variant="h6" color={darkTheme?"white":"black"} >
               {setTitle}
              </Typography>
              <Typography textAlign={"left"} variant="body1" color={darkTheme?"white":"black"} >
               {setDetails}
              </Typography>
            </Box>
          </Box>
        </Box>
  )
}

export default Cardindicator