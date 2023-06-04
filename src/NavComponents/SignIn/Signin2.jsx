import { Avatar,Button , Grid, Paper, Typography ,FormControlLabel, TextField, Container } from '@mui/material'
import React, { useEffect,useMemo, useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useSigninFormMutation } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Signin2 = () => {
    
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [iq ,setIq] = useState(true)
    const [responseInfo, { data , isError, isSuccess,message }] = useSigninFormMutation();
    // const [io ,response] = useSigninFormMutation();

    const navigate = useNavigate();
    const ab = JSON.stringify({ email, password });
    // console.log(data, 'Rresponse')

   

    const handleClick = async () => {
        // e.preventDefault();

        if (email && password) {
            await responseInfo(ab)
            // console.log(response,'response')
        } else {
            alert('Please Fill up the Form')
        }
    }

    useEffect(() => {
        if (isSuccess) {            
            if (data.success !== undefined ){
                setIq(data.success === 0);
                console.log(data.success === 0, 'error')
                console.log(data, 'respones')
            }
            console.log(data, 'Reafsdfsd')
            if (iq === false) {
                navigate('/');
                localStorage.setItem('userId',data.details.id)
            } else {
            }
        } else {            

        }

    
    },[isSuccess,data,iq])
   

         
    return (
        <Container maxWidth='sm'>
        <Grid sx={{ mt: '6rem' }}>
            <Paper>
                <Grid align='center'>
                    <Avatar>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2>Login</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Email' placeholder="Enter your email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
                    <TextField fullWidth label='Password' placeholder="password" value={password || ''} onChange={(e) => setPassword(e.target.value)} />

                </form>
                <Button onClick={(e)=>{handleClick(e.preventDefault())}} type='submit' variant='contained' color='primary'>Sign up</Button>

            </Paper>
        </Grid>
    </Container>
    )
}
export default Signin2
