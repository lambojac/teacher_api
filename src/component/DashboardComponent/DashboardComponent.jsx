import { Grid } from '@mui/material'

import React from 'react'
import headerIamge from '../../Assest/Navigation/Header.png'
import CardWithImage from '../CardImage/CardWithImage'
import { dashboardcardData } from '../../utils/fakedata/fakedata'




const DashboardComponent = () => {
  return (
    <Grid container direction={"column"}>
       
       <Grid item>
        <img src={headerIamge} alt=""  style={{margin:0,padding:0,height:"10em",width:"100%"}} />
        </Grid>

        <Grid container direction={"row"} spacing={12} padding={5} justifyContent={"center"} alignItems="center">
         {dashboardcardData.map((each,index)=>(
              <Grid item key={index}>
              <CardWithImage imagePath={each.image} totalNumber={each.number} labelCard={each.label}/>
          </Grid>
         ))}
          
           
           
   
      

        </Grid>
     
     
      
      
        
    </Grid>
  )
}

export default DashboardComponent