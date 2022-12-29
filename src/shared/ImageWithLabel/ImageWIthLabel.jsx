import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {Grid }from "@mui/material";
import './imagewithlabel.css'

const ImageWIthLabel = ({
  setImage,
  setpath,
  setLabel,
  setWidth,
  setHeight,
  labelVariant,
  keys,
  parameters,subType=false
}) => {

  return (
    <>
    {!subType&&
     <Link to={`/${setpath}`} style={{textDecoration:"none"}}>
     <Grid container
     sx={{
       backgroundColor:setpath===parameters&&"rgba(0, 0, 0, 0.402);",
      padding:"0.4em",
       borderRadius:"0.7em"
     }}
      spacing={2} alignItems={"center"} display="flex" justifyContent={"center"} >
     
         <Grid item
         className="image-with-label-logo"
           sx={{
             backgroundImage: `url(${setImage})`,
             width: setWidth,
             height: setHeight,
             backgroundSize: "fill",
             backgroundRepeat: "no-repeat",
             
             cursor: "pointer",
           }}
         />
          <Grid item>
          <Typography
           sx={{ cursor: "pointer" }}
           variant={labelVariant}
           fontWeight={"600"}
           color={"white"}
         >
           {setLabel}
         </Typography>
          </Grid>
       
         
     
     </Grid>
     </Link>
    }
    {subType&&
     <Link to={`/sub-dashboard/${setpath}`} style={{textDecoration:"none"}}>
     <Stack
     sx={{
       backgroundColor:setpath===parameters&&"rgba(0, 0, 0, 0.402);",
       padding:"0.5em 2em",
       borderRadius:"0.7em"
     }}
     spacing={2} direction="row" alignItems={"center"} >
     
         <Box
           sx={{
             backgroundImage: `url(${setImage})`,
             width: setWidth,
             height: setHeight,
             backgroundSize: "fill",
             backgroundRepeat: "no-repeat",
             
             cursor: "pointer",
           }}
         />

         <Typography
           sx={{ cursor: "pointer" }}
           variant={labelVariant}
           fontWeight={"600"}
           color={"white"}
         >
           {setLabel}
         </Typography>
         
     
     </Stack>
     </Link>}
     
    </>
  );
};

export default ImageWIthLabel;
