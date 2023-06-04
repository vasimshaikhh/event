import { Box, Button, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { Stack } from 'react-bootstrap';
import specialoffer from "../../../assets/images/special-offer-bg.png";


const EventSearch = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${specialoffer})`,
        height: "15rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <Stack direction="column">
              <Typography variant="h6">FIND BEST EVENT ON HARMONI</Typography>
              <Typography variant="h2">
                Event <strong>Search</strong>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={8} md={8} sm={8}>
            <Grid container spacing={0.6}>
              <Grid item xs={12} lg={4} md={4} sm={4}>
                <Typography variant="h6">EVENT KEYWORD</Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Event name,location,etc"
                  sx={{ backgroundColor: "#fff", width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} lg={4} md={4} sm={4}>
                <Typography variant="h6">EVENT KEYWORD</Typography>
                <Select
                  value={2}
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                >
                  <MenuItem value={1}>Conference</MenuItem>
                  <MenuItem value={2}>Option1</MenuItem>
                  <MenuItem value={3}>Option2</MenuItem>
                  <MenuItem value={4}>Option3</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} lg={4} md={4} sm={4}>
                <Button variant="contained" sx={{backgroundColor:'#333333',display:'flex',justifyContent:'center',width:'100%',height:'3.3rem',mt:'2rem'}}>Search Event Now</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default EventSearch
