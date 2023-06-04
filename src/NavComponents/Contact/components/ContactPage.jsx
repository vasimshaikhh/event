import * as React from 'react';
import { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { usePostContactUsMutation } from '../../../services/api';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    };
    
// --------------------------//Auth code---------------------
const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const marginTop = { marginTop: 5 }


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [country, setCountry] = useState('')
const [fon_number, setFonNumber] = useState('')
const[description,setDescription] = useState('')
const [message,setMessage] = useState()


  const [responseInfo, response] = usePostContactUsMutation();
  
  const av = JSON.stringify({name, email,country,fon_number,description})

const handleSignUp = async () => {
  if (name && email && country && fon_number && description) {
    await responseInfo(av)
    console.log(response, 'Response from Api ');
  } else {
      alert('Please Fill up the Form')
  }
  }
  useEffect(() => {
    if(response.isSuccess === true){
        if (response.data.success !== null || undefined ){
          setMessage(response.data.message)
        } else {
          alert('Please Insert Valid Info')
      }
    }
    console.log(message,'message')

   
  })



    
    // --------------------------//Auth code end here---------------------




  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh',mt:'3rem' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             Contact Us
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          
              <TextField margin="normal" required fullWidth name="name" label="name"type="name" id="name" value={name || ''} onChange={(e) => setName(e.target.value)}/>
              <TextField margin="normal" required fullWidth  name="email" label="email" type="email" id="email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
              <TextField margin="normal" required fullWidth name="country" label="country" type="select" id="country" value={country|| ''} onChange={(e) => setCountry(e.target.value)} />

                 <TextField margin="normal" required fullWidth name="number" label="phone Number" type="number" id="number"value={fon_number || ''} onChange={(e) => setFonNumber(e.target.value)} />
                 <TextField margin="normal" required fullWidth name="password" label="password" type="password" id="password"value={description || ''} onChange={(e) => setDescription(e.target.value)} />
                          
              <Button
              onClick={handleSignUp}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
              <Typography>{message}</Typography>
    
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}