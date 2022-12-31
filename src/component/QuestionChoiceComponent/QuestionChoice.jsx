
import React from "react";
import { Grid, } from "@mui/material";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import dashboardIamge from "../../Assest/Navigation/menu.png";
import image from "../../Assest/Dashboard/Questinnaire.png";

import ImageWithListComponent from "../ImageWithListComponent/ImageWithListComponent";
import { resultDataHead, topicsCellData, topicsDataHead } from "../../utils/fakedata/fakedata";
import ScrollComponent from "../ScrollComponent/ScrollComponent";


const QuestionChoice = () => {
  return (
    <Grid container direction={"column"}>
    <HeaderComponent
      headerLabel={"Questionnaires"}
      headerLabelIamges={dashboardIamge}
    />
    <ScrollComponent styles={{maxHeight:"120vh"}}>
    <Grid container padding={5} direction="row">
      
      <ImageWithListComponent
        labelList={"QUESTIONNAIRES"}
        setImage={image}
        searchType={false}
        buttonLabel="Create Account"
        questionType={"question-choice"}
        tableHead={resultDataHead}
        cellData={topicsCellData}
        tableType={"result"}
        optionType={"option"}
       
      />
     
     
    </Grid>
    </ScrollComponent>
  
   
  </Grid>
  )
}

export default QuestionChoice