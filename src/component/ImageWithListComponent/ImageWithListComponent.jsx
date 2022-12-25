import React from "react";
import ButtonLabel from "../../shared/Button/ButtonLabel";
import searchIcon from "../../Assest/Topic/SearchBtn.png";
import { Box, Grid, Typography } from "@mui/material";
import DataTable from "../TabelComponent/TabelComponent";
import "./imagewithlist.css";
import DropDownMenu from "../../shared/DropDownMenu/DropDownMenu";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import InputLabel from "../../shared/InputLabel/InputLabel";

const ImageWithListComponent = ({
  tableType,
  questionType = false,
  searchType = true,
  setImage,
  labelList,
  buttonLabel,
  tableHead,
  cellData,
  optionType = false,
}) => {
  return (
    <Box className="Image-with-list-container">
      <Box className="image-with-list-main">
        <Box className="image-container">
          <figure>
            <img src={setImage} alt="" className="image-list" />
          </figure>
          <Typography marginLeft={"-1.6em"} variant="h6" color={"grey"}>
            {labelList}
          </Typography>
        </Box>
        {searchType && (
          <Box display={"flex"} alignItems="center" gap={2}>
            <Typography color={"grey"} variant="h5">
              Search
            </Typography>

            <input type={"text"} className="search-input" />

            <img src={searchIcon} alt="" />
          </Box>
        )}
        {optionType === "none" && (
          <Box padding={3}>
            <ButtonLabel
              buttonLabel={buttonLabel}
              setSize="medium"
              loginType={false}
            />
          </Box>
        )}
      </Box>
      {optionType ==="option" && (
        <Box>
          <Grid container direction={"row"} spacing={4}>
            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
              <DropDownMenu defaultValue={"Choose Topics"} />
            </Grid>
            <Grid item sx={6} sm={6} md={4} lg={4} xl={4}>
              <DropDownMenu defaultValue={"Choose year"} />
            </Grid>
            <Grid item sx={6} sm={6} md={4} lg={4} xl={4}>
              <DropDownMenu defaultValue={"Choose Generated code"} />
            </Grid>
          </Grid>
        </Box>
      )}
      {!questionType && (
        <Box padding={3}>
          <DataTable
            cellData={cellData}
            tableHead={tableHead}
            tableType={tableType}
          />
        </Box>
      )}
      {questionType && (
        <Box padding={3}>
          <Grid container spacing={5}>
            <Grid item lg={12} md={12} xl={12}>
              <QuestionComponent setType={"default"} setPrimaryText={"QUESTION1:"} setSecondarytext={"MULTIPLE CHOICE"} setDetails={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"}/>
            </Grid>
            <Grid item lg={6} md={6} xl={6}>
              <QuestionComponent setType={"correct"} setPrimaryText={"CHOICE 1:"} setSecondarytext={"Correct"} setDetails={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"} />
            </Grid>
            <Grid item lg={6} md={6} xl={6}>
            <QuestionComponent setType={"wrong"} setPrimaryText={"CHOICE 2:"} setSecondarytext={"Wrong"} setDetails={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"} />
            </Grid>
            <Grid item lg={6} md={6} xl={6}>
            <QuestionComponent setType={"wrong"} setPrimaryText={"CHOICE 3:"} setSecondarytext={"Wrong"} setDetails={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"} />
            </Grid>
            <Grid item lg={6} md={6} xl={6}>
            <QuestionComponent setType={"wrong"} setPrimaryText={"CHOICE 4:"} setSecondarytext={"Wrong"} setDetails={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used"} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Box className="setting-container">
        {/* <Box className="setting-main">
            <Box className="setting-input-container">
                <InputLabel setType={"Text"}/>

            </Box>

        </Box> */}

      </Box>
    </Box>
  );
};

export default ImageWithListComponent;
