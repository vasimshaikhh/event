import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useGetParticularEventQuery } from '../../../../services/api';
import { useBookEventMutation } from '../../../../services/api';
import img from '../../../../assets/images/iamge.jpg'


const ParticularEventCard = () => {
  const [event_id, setEvId] = useState()
  const [message, setMessage] = useState();
  const user_id = localStorage.getItem('userId')

  const { id } = useParams()
  const { data, isSuccess, isError } = useGetParticularEventQuery(id);
  const element = data;
  const body = JSON.stringify({user_id,event_id})

  const [infoData , response] = useBookEventMutation()

  const onHandleClick = (async () => {
    if(isSuccess===true){
      await infoData(body)
     

  }
  })


  useEffect(() => {
    if (isSuccess === true) {
      setEvId(data.details[0].id)    
    }

    
  }, [isSuccess])
  useEffect(() => {
    if (response.isSuccess === true) {
      setMessage(response.data.message)
    }

    
  }, [response.isSuccess])




  return (
    <Container>
      <Grid container>
        {isSuccess === true ? 
          <>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
        
              <Card sx={{ maxWidth: "100%",borderRadius:'0rem',background:`url(${img})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
<CardMedia
  sx={{ height: 350, width: "100%" }}
  image={element.details[0].image}
  title="green iguana"
                />
                <Container maxWidth={'md'}>
    <CardContent>
      <Stack direction={'column'} spacing={1}>
      <Chip label={element.details[0].title} sx={{width:'40%'}} />
    <Chip label={element.details[0].s_date} sx={{width:'100%'}} />
      <Typography variant="body2" color="orange">
      <Chip label=' Tickets from $52' sx={{fontSize:19,width:'30%',display:'flex',justifyContent:'center'}} />
   
                    </Typography>
                    <Typography>'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam similique laborum veritatis incidunt earum minus voluptates laudantium. Quasi est nobis fuga quae magnam? Provident vero iure assumenda? Quo, voluptatem placeat?'
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam similique laborum veritatis incidunt earum minus voluptates laudantium. Quasi est nobis fuga quae magnam? Provident vero iure assumenda? Quo, voluptatem placeat?'
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam similique laborum veritatis incidunt earum minus voluptates laudantium. Quasi est nobis fuga quae magnam? Provident vero iure assumenda? Quo, voluptatem placeat?'
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam similique laborum veritatis incidunt earum minus voluptates laudantium. Quasi est nobis fuga quae magnam? Provident vero iure assumenda? Quo, voluptatem placeat?'
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
      {element.details[0].description}
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
                      <Button variant='outlined' onClick={onHandleClick}>Book Event</Button>
                      <Typography variant='body2' style={{color:'red'}}>{message}</Typography>
  </Box>
                  </CardActions>
                  </Container>
  </Card>
            </Grid>
            </>
          : null}
      </Grid>
    </Container>
  )
}


export default ParticularEventCard