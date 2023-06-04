import { Button, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import specialEvent from "../../assets/images/spacial-event-bg.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { useGoogleMaps } from "react-hook-google-maps";
import { useGetEventQuery } from '../../services/api'
import { Link } from "react-router-dom";
import img from '../../assets/images/iamge.jpg'
import img2 from '../../assets/images/iamge2.jpg'
import Carousel from 'react-material-ui-carousel'


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Possibility = () => {
  const [idata,setData] = useState()
 
  const [uid,setUid]=useState();
  const  { data, isLoading,
    isSuccess,
    isError } = useGetEventQuery()  
  return (
    <>
      <Container maxWidth='xl'>
      <Carousel>
      
              {isSuccess === true ? data?.details.map((element, i) => {
                return (
                  // <Carousel>
                  <Grid item key={i}  xs={6}>
                  
                <Card sx={{ maxWidth: "100%",borderRadius:'1rem',background:`url(${img})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                  <CardMedia
                    sx={{ height: 340, width: "100%" }}
                    image={element.image}
                    title="green iguana"
                  />
                      <CardContent>
                        <Stack direction={'column'} spacing={1}>
                        <Chip label={element.title} sx={{width:'4rem'}} />
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
                        <Link to={`/events/${element.id}`}  >
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

          
             
            </Carousel>
      </Container>
    </>
  );
};



export default Possibility;
