import React from 'react'
import { Button, Card, CardActions, CardMedia, Container, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../../services/api'

const EventCards = () => {
  const navigate = useNavigate()
  const { data, isSuccess } = useGetCategoriesQuery()
  
  console.log(data)

  return (
      <>
          <Container sx={{mt:'3rem',mb:'3rem'}}>
              <Grid container spacing={3}>
          {isSuccess === true ? data.data?.map((el,i) => {
            return (
              <Grid key={i} item xs={12} md={4}>
              <Card sx={{ maxWidth: '100%' }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={el.image}
                      title={el.category_name}
                    />
                    <CardActions sx={{display:'flex',justifyContent:'center'}}>
                      <Button onClick={()=>navigate(`/events/${el.url}`,{state:{name:el.category_name}})} size="small">{el.category_name}</Button>
                    </CardActions>
                  </Card>
              </Grid>
                )}):null}
                

             
                 
              </Grid>
      
          </Container>
      </>
  )
}

export default EventCards