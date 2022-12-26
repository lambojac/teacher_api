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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import image from "../../BG.png";
import "./dashboardPage.css";
import ScrollComponent from "../../component/ScrollComponent/ScrollComponent";
const Dashboard = () => {
  const { name } = useParams();
  const [trigger, setTrigger] = useState(false);

  return (
    <Grid
      container
      position={"relative"}
      sx={
        {
          // backgroundImage:`url(${image})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // height: "100%",
          // minWidth: "100%",
        }
      }
    >
      {trigger && (
        <Grid item xl={3} lg={3} md={4} zIndex={1}>
          <SideNavBar parameters={name} />
        </Grid>
      )}

      {trigger ? (
        <>
          {name === "dashboard" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <DashboardComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "teacher" && (
            <Grid xl={9} lg={9} md={8} className="grid-dashboard-container">
              <ScrollComponent styles={{ height: "120vh" }}>
                <TeacherComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "topic" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <TopicComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "result" && (
            <Grid
              item
              md={8}
              lg={9}
              xl={9}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <ResultComponent />
              </ScrollComponent>
            </Grid>
          )}
          {name === "question-choice" && (
            <Grid xl={9} lg={9} md={8} className="grid-dashboard-container">
              <ScrollComponent styles={{ height: "120vh" }}>
                <QuestionChoice />
              </ScrollComponent>
            </Grid>
          )}
          {name === "question-answer" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <QuestionAnswer />
              </ScrollComponent>
            </Grid>
          )}
          {name === "setting" && (
            <Grid
              item
              xl={9}
              lg={9}
              md={8}
              className="grid-dashboard-container"
            >
              <ScrollComponent styles={{ height: "120vh" }}>
                <Setting />
              </ScrollComponent>
            </Grid>
          )}
        </>
      ) : (
        <>
          {name === "dashboard" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <DashboardComponent />
            </Grid>
          )}
          {name === "teacher" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <TeacherComponent />
            </Grid>
          )}
          {name === "topic" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <TopicComponent />
            </Grid>
          )}
          {name === "result" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <ResultComponent />
            </Grid>
          )}
          {name === "question-choice" && (
            <Grid item md={12} lg={12} xl={12} sm={12} sx={12}>
              <QuestionChoice />
            </Grid>
          )}
          {name === "question-answer" && (
            <Grid item md={12} lg={12} xl={12} sm={12} xs={12}>
              <QuestionAnswer />
            </Grid>
          )}
          {name === "setting" && (
            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
              <Setting />
            </Grid>
          )}
        </>
      )}
      {!trigger && (
        <Grid item position={"absolute"} top={"1em"} left={"2em"}>
          <button
            onClick={() => setTrigger(true)}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            {<MenuOutlinedIcon fontSize="large" />}
          </button>
        </Grid>
      )}
      {trigger && (
        <Grid item zIndex={2} className="close-button">
          <button
            onClick={() => setTrigger(false)}
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "50%",
            }}
          >
            <CloseOutlinedIcon fontSize="large" />
          </button>
        </Grid>
      )}
    </Grid>
  );
};

export default Dashboard;
