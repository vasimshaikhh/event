import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
    TextField,
  Stack,
  Typography,
} from "@mui/material";
// import {  } from "react-bootstrap";
import specialoffer from "../../../assets/images/special-offer-bg.png";

const MakeanEventNow = () => {
  return (
    <Box
      sx={{
        mt: "2.5rem",
        backgroundImage: `url(${specialoffer})`,
        height: {md:"15rem",lg:'15rem',sm:'22rem',xs:'22rem'},
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={10}>
          <Grid item lg={1} md={1} sm={12} xs={12}>
            <Typography
              variant="h2"
              sx={{ color: "#fff", display: "flex", justifyContent: "center" }}
            ></Typography>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              {" "}
              <strong>30% </strong>
              <strong>Off In June~July For Birthday Events</strong>
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12} sx={{display:'flex',alignItem:'center',justifyContent:'center'}}>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "orange",
                borderRadius: "2rem",
                height: "3.7rem",
                              width: "17rem",
                        
              }}
              variant="contained"
            >
              make an event now
            </Button>
          </Grid>
        </Grid>

        {/* <Grid container>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Typography variant="h2">
              <strong>30%</strong>
            </Typography>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Typography variant="h4">
                <strong>Off In June~July For Birthday Events</strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
        </Grid> */}
      </Container>
    </Box>
  );
}

export default MakeanEventNow
