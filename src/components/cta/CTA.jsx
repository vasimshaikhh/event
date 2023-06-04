import React, { useEffect, useState } from 'react';
import './cta.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const CTA = () => {
  const ab = localStorage.getItem('userId')
  const [bull, setBull] = useState(true)
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (ab === undefined || null) {
  //     setBull(false)
  //   }
  // }, [ab])
  
  const onHandleClick = (() => {
    navigate('/signin')
  })

  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        {/* <Link to='/signup'> */}
          <Button  onClick={onHandleClick} type="button">Get Started</Button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default CTA;
