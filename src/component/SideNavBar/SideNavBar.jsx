import { Grid, Paper, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import image from "../../Assest/Navigation/sidebar.png";
import ImageWIthLabel from "../../shared/ImageWithLabel/ImageWIthLabel";
import logo from "../../Assest/Navigation/title.png";

import { sideNavData } from "../../utils/sideNavData/sideNavData";
import ButtonLabel from "../../shared/Button/ButtonLabel";
import {useNavigate} from 'react-router-dom'
import './sidenavbar.css'
const SideNavBar = ({ parameters,role,sideNavData,subType}) => {
  const history=useNavigate()
  const handleLogout=()=>{
    history('/')
  }

  const styles = {
    paperContiner: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
    },
  };

  return (
    <Grid container>
      <Paper style={styles.paperContiner}>
        <Grid container
          spacing={1}
          direction="column"
          alignItems={"center"}
          paddingBottom="0.7em"
         
          borderBottom="1px solid white"
          
        >
          <Grid item marginTop={"1.5em"} lg={4} md={2}>
            <img src={logo} alt="" className="iamge-logonavbar" />
          </Grid>
          <Grid item>
          <Typography variant="h5" fontWeight={"700"} color={"white"}>
            {role}
          </Typography>
          </Grid>
         
        </Grid>
        {sideNavData.map((each, index) => (
          <Box sx={{ margin: "2em",padding:"0em 1em" }} key={index}>
            <ImageWIthLabel
              setImage={each.image}
              setpath={each.values}
              labelVariant={"body1"}
              setLabel={each.label}
              setHeight={each.height}
              setWidth={each.width}
              parameters={parameters}
              subType={subType}
            />
          </Box>
        ))}
        <Box display={"flex"} alignItems="center" justifyContent={"center"}
        
          sx={{
           
           marginTop:"6em"
           
          }}
        >
          <ButtonLabel
            buttonLabel={"Logout"}
            handleCLick={handleLogout}
            styles={{
              fontSize: "1.2em",
              width: "10em",
              backgroundColor: "#ebad00",
              color: "black",
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};

export default SideNavBar;