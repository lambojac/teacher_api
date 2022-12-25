import { Grid } from '@mui/material'
import React from 'react'
import DashboardComponent from '../../component/DashboardComponent/DashboardComponent'
import QuestionChoice from '../../component/QuestionChoiceComponent/QuestionChoice'
import ResultComponent from '../../component/ResultComponent/ResultComponent'
import Setting from '../../component/SettingComponent/SettingComponent'
import SideNavBar from '../../component/SideNavBar/SideNavBar'
import TeacherComponent from '../../component/TeacherComponent/TeacherComponent'
import TopicComponent from '../../component/TopicComponent/TopicComponent'

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item md={4} lg={4} xl={2} zIndex={1}>
      <SideNavBar/>
      </Grid>

      {/* <Grid item md={8} lg={8} xl={10}>
        <DashboardComponent/>
      </Grid> */}
      {/* <Grid item md={8} lg={8} xl={10}>
        <TeacherComponent />
      </Grid> */}
      {/* <Grid item md={8} lg={8} xl={10}>
        <TopicComponent/>
      </Grid> */}
      {/* <Grid item md={8} lg={8} xl={10}>
        <ResultComponent/>
      </Grid> */}
      {/* <Grid item md={8} lg={8} xl={10}>
        <QuestionChoice/>
      </Grid> */}
      <Grid item md={8} lg={8} xl={10}>
        <Setting/>
      </Grid>
     
    
    </Grid>
   
  )
}

export default Dashboard