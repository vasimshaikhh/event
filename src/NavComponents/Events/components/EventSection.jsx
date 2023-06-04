import { Button, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import specialEvent from "../../../assets/images/spacial-event-bg.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useGoogleMaps } from "react-hook-google-maps";
import { useGetEventQuery, usePostCategoriesMutation } from '../../../services/api'
import { Link, useLocation } from "react-router-dom";
import img from '../../../assets/images/iamge.jpg'
import img2 from '../../../assets/images/iamge2.jpg'

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
  // const { data:}

const EventSection = () => {
  // const [idata,setData] = useState()
  // const { ref, map, google } = useGoogleMaps(
  //   "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
  //   // NOTE: even if you change options later
  //   {
  //     center: { lat: 0, lng: 0 },
  //     zoom: 3,
  //   }
  // );
  // const [uid,setUid]=useState();
  const { data, isLoading, isSuccess, isError } = useGetEventQuery()  
  const category_name = useLocation()
  const [resInfo, response] = usePostCategoriesMutation()
  
  useEffect(() => {
    (async() => {
      if (category_name !== null || undefined) {
        console.log(category_name.state.name, 'rgfgfgfg')
        await resInfo(category_name.state.name)
      }
    })()   
  }, [category_name])
  
  useEffect(() => {
    if (response.isSuccess === true) {
      console.log(response)

    }
  }, [response.isSuccess])
  console.log(response)





  
  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ mt: "3rem" }}>
          {/* <Grid item xs={12} lg={3} md={3} sm={3}>
            <Stack direction="column" spacing={3}>
              <Link to='/mybookings'>
              <Button
                variant="outlined"
                startIcon={<CalendarTodayOutlinedIcon />}
                sx={{width:'100%'}}
              >
                {" "}
                My Bookings
              </Button></Link>

              <Typography
                sx={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Google Map Search
              </Typography>
              <Card>
                <div ref={ref} style={{ width: "100%", height: "300px" }} />
              </Card>
              <Card>
                <Box
                  component="img"
                  src={specialEvent}
                  sx={{ width: "100%", height: "300px" }}
                />
              </Card>
            </Stack>
          </Grid> */}

          {/* <Grid item xs={12} lg={9} md={9} sm={9}> */}
          <Grid item xs={12} md={12}>
            <Grid
              container
              spacing={3}
            >
              {response.isSuccess === true ? response.data.data?.map((element, i) => {
                // setUid(element.id)
                return (
                
                  <Grid key={i} item xs={12} lg={4} md={4} sm={12}>
                  
                <Card sx={{ maxWidth: "100%",borderRadius:'1rem',background:`url(${img})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                  <CardMedia
                    sx={{ height: 250, width: "100%" }}
                    image={element.image}
                    title="green iguana"
                  />
                      <CardContent>
                        <Stack direction={'column'} spacing={1}>
                        <Chip label={element.title} sx={{width:'100%'}} />
                      <Chip label={element.s_date} sx={{width:'100%'}} />
                        <Typography variant="body2" color="orange">
                        <Chip label=' Tickets from $52' sx={{width:'70%',display:'flex',justifyContent:'start'}} />
                     
                          </Typography>
                          </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: "2rem" }}>
                      <AccessTimeIcon />
                      <Typography variant="body2" sx={{ mt: "20px" }}>
                        Start 20:00pm - 22:00pm
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <LocationOnIcon />
                      <Typography variant="body2" sx={{ mt: "20px" }}>
                        {element.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                        <Box >
                        <Link to={`/event/${element.id}`}  >
                      <Button
                        className="hoverColor"
                        variant="seconary"
                        sx={{color:'#fff',width:'15rem',background:`url(${img2})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}
                      >
                        
                        View in detail
                            </Button>
                      </Link>
                    </Box>
                  </CardActions>
                    </Card>
                </Grid>
                  
              )
              })
               : null}

          
             
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventSection;
