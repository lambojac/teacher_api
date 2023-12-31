import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {MDBIcon } from "mdb-react-ui-kit";
import {
  Checkbox,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./container.css";
import image from "../../../BG.png";
import loginHolderImage from "../../../Loginholder.png";
import logo from "../../../Title.png";
import InputLabel from "../../InputLabel/InputLabel";
import CheckboxLabels from "../../CheckBox/CheckBox";
import ButtonLabel from "../../Button/ButtonLabel";
import { useState } from "react";
import{useNavigate} from 'react-router-dom'
export default function CustomContainer({
  maxWidth,
  paperImage,
  paperImageContainer = false,
  setUser
 
}) {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
  };
 const history=useNavigate()
const [username,setUsername]=useState("")
const[password,setPassword]=useState("")
const[error,setError]=useState("")


const handleSubmit=()=>{
  if(username==="admin"&&password==="admin"){
   
    setUser("admin")
    history('/dashboard')
   
  }
  else if(username==="teacher"&&password==="teacher")
  {
    setUser('teacher')
    history('/dashboard/dashboard-teacher')
  }
 else{
      setError("PASSWORD OR USERNAME DOES'NT MATCH")
    }
}
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={maxWidth} >
        <Box sx={{ bgcolor: "#ffffff80", height: "100vh" }}>
          <Paper style={styles.paperContainer}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item marginTop="5em">
                <img
                  src={loginHolderImage}
                  className="imageLogin"
                  alt="loginHolder"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    padding: 0,
                    margin: 0,
                  }}
                />
              </Grid>
              <Grid container
                direction={"column"}
                spacing={1}
                alignItems={"center"}
                position="absolute"

              >
                <Grid item xs={12} md={12} sm={12} lg={12} marginTop="1em">
                  <img
                    src={logo}
                    className="imageLogo"
                    alt="loginHolder"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      padding: 0,
                      margin: 0,
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={12} md={12} sx={{marginTop:"1em"}}>
                  <InputLabel
                    setType={"text"}
                    inputPlaceHolder="Enter your username"
                    onChange={(e)=>setUsername(e.target.value)}
                 
                    icons={<MDBIcon fas icon='at' />}
                    
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <InputLabel
                    setType={"password"}
                    inputPlaceHolder="Enter your password"
                    onChange={(e)=>setPassword(e.target.value)}
                    icons={<MDBIcon fas icon='key' />}
                  />
                </Grid>
                <Grid item xs={6} lg={8}>
                  <CheckboxLabels checkBoxLabel={"Remeber me"} />
                </Grid>
                {error&&
                <Grid item>
                <Typography variant="body1" color={"red"}>{error}</Typography>
              </Grid>
                }
                
                <Grid item xs={8} lg={8}>
                  <ButtonLabel
                    buttonVariant={"contained"}
                    setSize={"large"}
                    buttonLabel={"Login"}
                    handleCLick={handleSubmit}
                    styles={{
                      fontSize:"1.2em",
                      width: "20em",
                      backgroundColor:"#ebad00",
                      color:"black"
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
}