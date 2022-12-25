import { Grid } from "@mui/material";
import React from "react";

import CardWithImage from "../CardImage/CardWithImage";
import { dashboardcardData } from "../../utils/fakedata/fakedata";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import "./dashboard.css";
import Cardindicator from "../CardIndiactor/Cardindicator";
const DashboardComponent = () => {
  return (
    <Grid container direction={"column"}>
      <HeaderComponent
        headerLabel={"Dashboard"}
        headerLabelIamges={dashboardIamge}
      />

      <Grid
        container
        direction={"row"}
        spacing={12}
        padding={5}
        justifyContent={"center"}
        alignItems="center"
      >
        {dashboardcardData.map((each, index) => (
          <Grid item key={index}>
            <CardWithImage
              imagePath={each.image}
              totalNumber={each.number}
              labelCard={each.label}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        direction={"row"}
        spacing={5}
        padding={7}
      >
        <Grid item>
          <Cardindicator
            darkTheme={false}
            setDetails={"Student pass for month for this september"}
            setTitle="monthly passer"
          />
        </Grid>
        <Grid item>
          <Cardindicator
            setDetails={"student statics pass verse fail"}
            setTitle={"Passer percentan=ge"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardComponent;
