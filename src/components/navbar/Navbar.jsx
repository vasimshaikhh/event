import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
// import logo from "../../assets/images/";
import logo from '../../assets/images/2.site-logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';
import img from '../../assets/images/iamge.jpg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [avail,setAvail] = useState(false)

  const ab = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const navigate = useNavigate();



  useEffect(() => {
    if (ab !== null || undefined) {
      setAvail(true)
    }
  }, [ab , userName])

  const handleLogOut = () => {
    navigate('/')
    localStorage.clear();
    if(avail === true){
      window.location.reload();
    }
  }
  


  return (
    <div className="gpt3__navbar gradient__bg">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} style={{ width: '150px', height: '50px' }} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/">HOME</Link></p>
          <p><Link to="/about">ABOUT</Link></p>
          <p><Link to="/events">EVENTS</Link></p>
          <p><Link to="/gallery">GALLERY</Link></p>
          <p><Link to="/contact">CONTACT</Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <FormControl fullWidth>
          {avail !== true ? 
            <InputLabel sx={{ color: 'blue' }} id="demo-simple-select-label"><strong style={{display:'flex'}}><LoginIcon/> <h5>SignIn </h5></strong></InputLabel>
            :
            <InputLabel sx={{color:'blue'}} id="demo-simple-select-label"><strong><h4>{userName}</h4></strong></InputLabel>
          }
 
  <Select placeholder='User Name' sx={{width:'12rem',color:'#fff',backgroundColor:'#fff',background:`url(${img})`,backgroundPosition:'center',backgroundSize:'cover'}}>
            {avail !== true ?
              <Link to='/signin'><MenuItem>SignIn</MenuItem></Link> :
              <>    
                <Link to='/account'><MenuItem>My Account</MenuItem></Link> 
                <Link to='/mybookings'><MenuItem>My Booking</MenuItem></Link> 
                <MenuItem onClick={handleLogOut}><LogoutIcon/>LogOut</MenuItem>
              </>
            }
          
          
  </Select>
</FormControl>

        {/* <Link to='/signin'><p>Sign in</p></Link>
        <Link to='signup'> <button type="button">Sign up</button></Link> */}
        
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
           <p><Link to="/">HOME</Link></p>
          <p><Link to="/about">ABOUT</Link></p>
          <p><Link to="/events">EVENTS</Link></p>
          <p><Link to="/gallery">GALLERY</Link></p>
          <p><Link to="/contact">CONTACT</Link></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <Link to='/signin'><p>Sign in</p></Link>
            <Link to='/signup'><button type="button">Sign up</button></Link>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
