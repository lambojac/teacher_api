
import React from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Settings/Username.png"
import image2 from "../../Assest/Settings/password.png"

import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { resultDataHead, topicsCellData, topicsDataHead } from "../../utils/fakedata/fakedata";


const Setting = () => {
  return (
    <Grid container direction={"column"}>
    <HeaderComponent
      headerLabel={"Setting"}
      headerLabelIamges={dashboardIamge}
    />
    <Grid container padding={2} spacing={10} direction="column">
    <Grid item>
    <ImageWithListComponent
        labelList={"username"}
        setImage={image}
        searchType={false}
        buttonLabel="Create Account"
       
       
      />
    </Grid>
   
    <Grid item>
    <ImageWithListComponent
        labelList={"Password"}
        setImage={image2}
        searchType={false}
        buttonLabel="Create Account"
        
       
      />
    </Grid>
    </Grid>
  </Grid>
  )
}

export default Setting