import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import trangle from "../../Assest/Questionnaire/triangle.png";
import edit from "../../Assest/Questionnaire/edit.png";
import './questionchoice.css'
const QuestionComponent = ({
  setPrimaryText,
  setType="default",
  setSecondarytext,
  setDetails,
  typeValue=true

}) => {
  const[editState,setEditState]=useState(true)
  const handleEdit=()=>{
    if(editState===true){
setEditState(false)
    }
    else{
setEditState(true)
    }
  }
  return (
    <Box className="questionnaries-container">
      <Box className="questionnaries-main">
        <Box
          className="title-container"
          sx={{
            backgroundColor: [
              (setType === "default" && "rgb(52, 101, 223)") ||
                (setType === "wrong" && "rgb(227, 108, 108)") ||
                (setType === "correct" && "rgb(61, 142, 61)"),
            ],
          }}
        >
          <Typography variant="body1" color={"white"}>
            {setPrimaryText}
          </Typography>
          <Box className="multiple-choice-container">
            <Typography variant="body1" color={"white"} className="multiple-text">
              {setSecondarytext}
            </Typography>
            {typeValue&&
             <img src={trangle} alt="" className="trangle-iamge" />
            }
           
          </Box>
          <Box className="edit-container" style={{cursor:"pointer"}}>
            <div onClick={handleEdit}>
            <img src={edit} alt="edit-image" className="edit-image" />
            </div>
           
          </Box>
        </Box>
        <Box className="questionnaries-details-container">
         <textarea disabled={editState}  className="textArea"/>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionComponent;
