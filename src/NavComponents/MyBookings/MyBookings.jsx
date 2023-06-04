import {
  Card,
  CardMedia,
  Container,
  CardActions,
  Grid,
  Stack,
  Typography,
  Box,
  Chip,
  Button,
  CardContent,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { usePostSelectedEventMutation } from "../../services/api";
// import { useGetBookingDataQuery } from "../../services/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import img from '../../assets/images/iamge.jpg'


const MyBookings = () => {
  const [post, setPost] = useState();
  const user_id = localStorage.getItem("userId");
  const [ids, setIds] = useState([]);
  const [dataById, setDatabyId] = useState([]);
  const [make, setMake] = useState([]);
  const [page,setPage] = useState(1)

  const [id, setId] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const arr = [];
    if (ids !== null || undefined) {
      for (var v = 0; v <= ids.length; v++) {
        fetch(`http://localhost:5000/events/${ids[v]}`, requestOptions)
          .then((response) => response.json())
          .then((data) => arr.push(data));
      }
      setDatabyId(arr, "sdsd");
    }
  }, [ids]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const imake = [];
      if (dataById.length > 1) {
        // alert('Kaam hogaya')
        dataById.forEach((element) => {
          element.details.forEach((element2) => {
            imake.push(element2);
            setMake(imake);
          });
        });
      }
      }, 100);
      return () => clearTimeout(timer);
  }, [dataById]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id }),
    };
    if (user_id !== null) {
      // fetch(`http://localhost:5000/userevent?_page=${page}`, requestOptions)
      fetch(`http://localhost:5000/userevent`, requestOptions)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, []); 

  useEffect(() => {
    setTimeout(function () {
      var newArr2 = [];
      if (post?.success) {
        for (var i = 0; i <= post.details.length; i++) {
          newArr2 = post.details.map((detail) => {
            return detail.event_id;
          });
        }
      }
      if (newArr2 !== null || undefined) {
        setIds(newArr2);
      }
    }, 100);
  }, [post]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {make?.map((element, i) => {
            return (
              <Grid key={i} item xs={12} lg={6} md={6} sm={12}>
                <Card sx={{ maxWidth: "100%", borderRadius: "1rem", background:`url(${img})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                  <CardMedia
                    sx={{ height: 250, width: "100%" }}
                    image={element.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack direction={"column"} spacing={1}>
                      <Chip label={element.title} sx={{ width: "4rem" }} />
                      <Chip label={element.s_date} sx={{ width: "100%" }} />
                      <Typography variant="body2" color="orange">
                        <Chip
                          label=" Tickets from $52"
                          sx={{
                            width: "70%",
                            display: "flex",
                            justifyContent: "start",
                          }}
                        />
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
                  
                  </CardActions>
                </Card>

              </Grid>
            );
          })}
          {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
          <Pagination
            onChange={(event,value)=>setPage(value)}
            count={10}
           
                variant="outlined"
                size="large"
            defaultPage={1}
                hidePrevButton
                hideNextButton
                color="primary"
                sx={{ width: '100%',color:'#fff',backgroundColor:'#fff',borderRadius:'3rem' }} />
              </Box>
            </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default MyBookings;
