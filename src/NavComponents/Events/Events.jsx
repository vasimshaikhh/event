import React from 'react'
import EventSearch from './components/EventSearch'
import EventSection from './components/EventSection'
import { BottomNavigation, BottomNavigationAction, Box, Grid } from '@mui/material'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ImageIcon from '@mui/icons-material/Image';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from 'react-router-dom'
import CelebrationIcon from '@mui/icons-material/Celebration';
import CakeIcon from '@mui/icons-material/Cake';
import RedeemIcon from '@mui/icons-material/Redeem';
import EventHeader from './components/EventHeader';



const Events = () => {
  const [value, setValue] = React.useState(0);
  const navigate =  useNavigate()

  return (
    <>
      
      {/* <EventHeader /> */}

      {/* <Grid container spacing={2} sx={{backgroundColor:'#040C18'}}>
              <Grid item xs={12} sx={{width:'100%'}}>                        
                    <Box sx={{width:'100%',backgroundColor:'#040C18'}}>
                        <BottomNavigation showLabels value={value}onChange={(event, newValue) => {setValue(newValue);}}>
                           <BottomNavigationAction  onClick={()=>navigate('/events/wedding')} label="Wedding" icon={<RedeemIcon />} />
                           <BottomNavigationAction  value={value} onClick={()=>navigate('/events/birthday')} label="Birthday" icon={<CakeIcon sx={{color:'red'}} />} />
                           <BottomNavigationAction value={value} onClick={()=>navigate('/events/marriage')} label="Marriage" icon={<CelebrationIcon sx={{color:'purple'}} />} />
                         </BottomNavigation>
                    </Box>
              </Grid>
      </Grid> */}
      
      <EventSection/>
    
    </>
  )
}

export default Events
