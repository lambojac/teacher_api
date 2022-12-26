import { Grid } from "@mui/material";
import React, { useState } from "react";

import DashboardComponent from "../../component/DashboardComponent/DashboardComponent";
import QuestionChoice from "../../component/QuestionChoiceComponent/QuestionChoice";
import ResultComponent from "../../component/ResultComponent/ResultComponent";
import Setting from "../../component/SettingComponent/SettingComponent";
import SideNavBar from "../../component/SideNavBar/SideNavBar";
import TeacherComponent from "../../component/TeacherComponent/TeacherComponent";
import TopicComponent from "../../component/TopicComponent/TopicComponent";
import { useParams } from "react-router-dom";
import QuestionAnswer from "../../component/QuestionAnswer/QuestionAnswer";
import image from '../../BG.png'
import './dashboardPage.css'
import ScrollComponent from "../../component/ScrollComponent/ScrollComponent";
const Dashboard = () => {
  const { name } = useParams();
  const [trigger, setTrigger] = useState(false);

  return (
    <Grid container position={"relative"} sx={{
      // backgroundImage:`url(${image})`,
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      // height: "100%",
      // minWidth: "100%",
      

    }}>
      {trigger&&
      <Grid item md={4} lg={4} xl={2} zIndex={1} >
        <SideNavBar parameters={name} />
      </Grid>
      }
      
      {trigger?
    <>
     {name === "dashboard" && (
      
           <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
          <ScrollComponent styles={{height:"100vh"}}>
          <DashboardComponent />

          </ScrollComponent>
          
        </Grid>
    
       
      )}
      {name === "teacher" && (
        <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
          <ScrollComponent styles={{height:"100vh"}}>
          <TeacherComponent />
          </ScrollComponent>
          
        </Grid>
      )}
      {name === "topic" && (
        <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
           <ScrollComponent styles={{height:"100vh"}}>
           <TopicComponent />
           </ScrollComponent>
          
        </Grid>
      )}
      {name === "result" && (
        <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
          <ScrollComponent styles={{height:"100vh"}}>
          <ResultComponent />
          </ScrollComponent>
         
        </Grid>
      )}
      {name === "question-choice" && (
        <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
           <ScrollComponent styles={{height:"100vh"}}>
           <QuestionChoice />
           </ScrollComponent>
          
        </Grid>
      )}
      {name === "question-answer" && (
        <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
           <ScrollComponent styles={{height:"100vh"}}>
           <QuestionAnswer />
           </ScrollComponent>
          
        </Grid>
      )}
      {name === "setting" && (
        <Grid item md={8} lg={8} xl={10} className="grid-dashboard-container">
           <ScrollComponent styles={{height:"100vh"}}>
           <Setting />
         </ScrollComponent>
         
        </Grid>
      )}
    </>  :
    <>
     {name === "dashboard" && (
        <Grid item md={12} lg={12} xl={12}>
          <DashboardComponent />
        </Grid>
      )}
      {name === "teacher" && (
        <Grid item md={12} lg={12} xl={12}>
          <TeacherComponent />
        </Grid>
      )}
      {name === "topic" && (
        <Grid item md={12} lg={12} xl={12}>
          <TopicComponent />
        </Grid>
      )}
      {name === "result" && (
        <Grid item md={12} lg={12} xl={12}>
          <ResultComponent />
        </Grid>
      )}
      {name === "question-choice" && (
        <Grid item md={12} lg={12} xl={12} sm={12}>
          <QuestionChoice />
        </Grid>
      )}
      {name === "question-answer" && (
        <Grid item md={12} lg={12} xl={12}>
          <QuestionAnswer />
        </Grid>
      )}
      {name === "setting" && (
        <Grid item md={12} lg={12} xl={12}>
          <Setting />
        </Grid>
      )}
    
    
    
    
    
    
    </>
    
    }
    {!trigger&&
    <Grid item position={"absolute"} top={"1em"} left={"2em"}>
    <button onClick={()=>setTrigger(true)}>open</button>
  </Grid>
    
    }
    {trigger&&
     <Grid item position={"absolute"} top={"1em"} left={"15em"} zIndex={2}>
     <button onClick={()=>setTrigger(false)}>close</button>
   </Grid>
    }
   
     
    </Grid>
  );
};

export default Dashboard;
