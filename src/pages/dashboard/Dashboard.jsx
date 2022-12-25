import { Grid } from "@mui/material";
import React from "react";

import DashboardComponent from "../../component/DashboardComponent/DashboardComponent";
import QuestionChoice from "../../component/QuestionChoiceComponent/QuestionChoice";
import ResultComponent from "../../component/ResultComponent/ResultComponent";
import Setting from "../../component/SettingComponent/SettingComponent";
import SideNavBar from "../../component/SideNavBar/SideNavBar";
import TeacherComponent from "../../component/TeacherComponent/TeacherComponent";
import TopicComponent from "../../component/TopicComponent/TopicComponent";
import { useParams } from "react-router-dom";
import QuestionAnswer from "../../component/QuestionAnswer/QuestionAnswer";
const Dashboard = () => {
  const {name}=useParams()
  
  return (
    <Grid container>
      <Grid item md={4} lg={4} xl={2} zIndex={1}>
        <SideNavBar parameters={name}/>
      </Grid>
    {name==="dashboard"&&
    <Grid item md={8} lg={8} xl={10}>
    <DashboardComponent/>
  </Grid>
    }
      {name==="teacher"&&
      <Grid item md={8} lg={8} xl={10}>
      <TeacherComponent />
    </Grid>}
      {name==="topic"&&
       <Grid item md={8} lg={8} xl={10}>
       <TopicComponent/>
     </Grid>
      }
     {name==="result"&&
     <Grid item md={8} lg={8} xl={10}>
     <ResultComponent/>
   </Grid>
     }
      {name==="question-choice"&&
       <Grid item md={8} lg={8} xl={10}>
       <QuestionChoice/>
     </Grid>
      }
        {name==="question-answer"&&
       <Grid item md={8} lg={8} xl={10}>
       <QuestionAnswer/>
     </Grid>
      }
     {name==="setting"&&
     <Grid item md={8} lg={8} xl={10}>
     <Setting />
   </Grid>
     
     }
      
    </Grid>
  );
};

export default Dashboard;
