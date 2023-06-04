// ------------------------------------------------------------------------
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUpdataUserDataMutation } from "../../../services/api";
import { useGetUserDetailsQuery } from "../../../services/api";
import { Radio, RadioGroup } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ChangeDetails() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // --------------------------//Auth code---------------------

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone_num, setPhno] = React.useState();
  const [gender, setGender] = React.useState();
  const [detname, setDetName] = React.useState();
  const [detemail, setDetEmail] = React.useState();
  const [detphno, setDetPhno] = React.useState();
  const [detgender, setDetGender] = React.useState();
  const [message, setMessage] = useState();
  const id = localStorage.getItem("userId");
  const responsedet = useGetUserDetailsQuery(id);
  console.log(responsedet, "ResponseDetail");
  const [iq, setIq] = useState(true);
  const [responseInfo, response] = useUpdataUserDataMutation();
  const navigate = useNavigate()
  useEffect(() => {
    if (name === undefined) {
      setName(detname);
    }
    if (email === undefined) {
      setEmail(detemail);
    }
    if (phone_num === undefined) {
      setPhno(detphno);
    }
    if (gender === undefined) {
      setGender(detgender);
    }
  });
  const body = JSON.stringify({ name, email, gender, phone_num });
  console.log(name, email, gender, phone_num);

  const handleClick = async () => {
    if (email && name && phone_num && gender) {
      await responseInfo({ body, id });
      console.log(body, id, "BodyId");
    } else {
      alert("Dont Leave the Field Blank");
    }
  };

  useEffect(() => {
    if (responsedet.isSuccess === true) {
      setDetName(responsedet.data.details[0].name);
      setDetEmail(responsedet.data.details[0].email);
      setDetGender(responsedet.data.details[0].gender);
      setDetPhno(responsedet.data.details[0].phone_num);
    }
  }, [responsedet.isSuccess]);

  useEffect(() => {
    if (response.isSuccess === true) {
      console.log(response, "response");
      setMessage(response.data.message);
      console.log(message, "message");
      navigate('/account')
      window.location.reload()
    }
  }, [response.isSuccess]);
  
  // --------------------------//Auth code end here---------------------
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh",mt:'3rem' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Change User Detail
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <label>Name</label>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="name"
                autoComplete="name"
                defaultValue={detname}
                value={name || detname || ""}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <label>Email</label>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                defaultValue={detemail}
                autoComplete="email"
                value={email || detemail || ""}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <label>Gender</label> <br />
              <RadioGroup
                aria-label={"gender"}
                name="gender"
                defaultValue={detgender}
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value={"female"|| ''}
                  checked={gender == "female"}
                  control={<Radio />}
                  onChange={(e) => setGender(e.target.value)}
                  label="Female"
                />
                <FormControlLabel
                  value={"male" || ''}
                  checked={gender == "male"}
                  control={<Radio />}
                  onChange={(e) => setGender(e.target.value)}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  checked={gender == "other"}
                  control={<Radio />}
                  onChange={(e) => setGender(e.target.value)}
                  label="other"
                />
              </RadioGroup>
              <br />
              <label>PhoneNumber</label>
              <TextField
                margin="normal"
                required
                fullWidth
                defaultValue={detphno}
                id="number"
                name="number"
                // autoComplete="number"
                value={ phone_num || ""}
                // value={phone_num || detphno || ""}
                onChange={(e) => setPhno(e.target.value)}
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={(e) => {
                  handleClick(e.preventDefault());
                }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Change
              </Button>
              <Typography variant={"body2"} sx={{ color: "red" }}>
                {message}
              </Typography>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
