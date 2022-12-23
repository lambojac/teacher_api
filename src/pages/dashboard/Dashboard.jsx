import { Grid } from '@mui/material'
import React from 'react'
import DashboardComponent from '../../component/DashboardComponent/DashboardComponent'
import SideNavBar from '../../component/SideNavBar/SideNavBar'

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item md={2}>
      <SideNavBar/>
      </Grid>

      <Grid item md={10}>
        <DashboardComponent/>
      </Grid>
     
    
    </Grid>
   
  )
}

export default Dashboard