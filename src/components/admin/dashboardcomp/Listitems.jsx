import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CategoryIcon from '@mui/icons-material/Category';
import ChecklistIcon from '@mui/icons-material/Checklist';

export const MainListItems = () => {
  const navigate = useNavigate()
  return (
  
  <React.Fragment>
    {/* <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/chart'>
        <ListItemText primary="Dashboard" />
        </Link>
    </ListItemButton> */}
    <ListItemButton onClick={()=>navigate('/admin/userlist')}>
      <ListItemIcon>
        <ChecklistIcon />
      </ListItemIcon>
      <ListItemText primary="User List" />
    </ListItemButton>
    
    <ListItemButton onClick={()=>navigate('/admin/eventpost')}>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Event Post" />
    </ListItemButton>

    <ListItemButton onClick={()=>navigate('/admin/bookedevent')}>
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="Booked Events" />
      </ListItemButton>
      
    <ListItemButton onClick={()=>navigate('/admin/postcategory')}>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Post Category" />
    </ListItemButton>

    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton> */}

  </React.Fragment>
  )
} 
export default MainListItems

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Authentication
//     </ListSubheader>   

//     <ListItemButton>
//       <ListItemIcon>
//         < LoginIcon />
//       </ListItemIcon>
//       <ListItemText primary="Login" />
//     </ListItemButton>

//   </React.Fragment>
// );
// export const secondaryListItems2 = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Authentication
//     </ListSubheader>   

//     <ListItemButton>
//       <ListItemIcon>
//         < LogoutIcon  />
//       </ListItemIcon>
//       <ListItemText primary="Logout" />
//     </ListItemButton>

//   </React.Fragment>
// );