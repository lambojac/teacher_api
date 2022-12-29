import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import headerIamge from "../../Assest/Navigation/Header.png";
import setting from "../../Assest/Navigation/4-settings.png";
import {motion} from "framer-motion"
import "./header.css";
const HeaderComponent = ({ headerLabel,headerLabelIamges}) => {

  return (
    <>
      <Box className="header-container">
       
        <img
          src={headerIamge}
          alt=""
          style={{objectFit:"cover",width:"100%",height:"auto"}}
          className="header-image"
        />
        
        
        <Grid container
          position={"absolute"}
          top={70}
          display={"flex"}
          alignItems="center"
          padding={4}
          gap={0.5}
          
        >
          <img src={headerLabelIamges} alt="" className="header-label-image"/>
          <motion.div initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}>
          <Typography color={"white"} fontSize="1.2em">{headerLabel}</Typography>
          </motion.div>
         
        </Grid>
      </Box>
    </>
  );
};

export default HeaderComponent;
