
import React from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Dashboard/Topic.png";
import "./topiccomponent.css";
import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { topicsCellData, topicsDataHead } from "../../utils/fakedata/fakedata";
import backgroundImage from "../../BG.png";
import ScrollComponent from "../ScrollComponent/ScrollComponent";


const TopicComponent = () => {
  return (
    <Grid container direction={"column"}
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
     
    }}
    className="dashboard-component-container"
    >
    <HeaderComponent
      headerLabel={"Topics"}
      headerLabelIamges={dashboardIamge}
    />
    <ScrollComponent>
    <Grid container paddingTop={5} paddingLeft={2}  paddingRight={2} direction="row">
      <Grid item xl={12} lg={12} xs={8}>
      <ImageWithListComponent
        labelList={"Topics List"}
        setImage={image}
        searchType={true}
        buttonLabel="Create Account"
      
        tableHead={topicsDataHead}
        cellData={topicsCellData}
        tableType={"topic"}
        optionType="none"
       
      />
      </Grid>
      
    </Grid> 
    </ScrollComponent>
   
  </Grid>
  )
}

export default TopicComponent