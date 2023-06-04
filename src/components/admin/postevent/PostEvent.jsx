import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAddEventMutation } from "../../../services/admin";
import { useGetCategoriesQuery } from "../../../services/api";

const theme = createTheme();

export default function PostEvent() {
    const [tim, setTim] = React.useState();
    const [profile,setprofile] = React.useState()
    const [title,setTitle] = React.useState()
    const [location,setLocation] = React.useState()
    const [description, setDescription] = React.useState()
    const [sdt,setSdt]=React.useState()
    const [edt,setEdt]=React.useState()
  const [category_name, setCatname] = React.useState()
  
  const [respInfo, response] = useAddEventMutation()
  const {data,isSuccess} = useGetCategoriesQuery()
  

  console.log(location,'location')
  console.log(profile, 'profile');
  const formattedSDate = new Date(sdt);
  const s_date = formattedSDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
    
  const formattedEDate = new Date(edt);
  const e_date = formattedEDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  var dateWithouthSecond = new Date(tim);
  const time = dateWithouthSecond.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

    const onHandlePost = async(e) => {
      e.preventDefault();
      if (profile && title && s_date && e_date && time && location && category_name && description) {    
        await respInfo({profile , title , s_date , e_date , time , location,category_name , description})
      } else {
        alert('Please Fill up the Vacant Place')
        }
    }
  console.log(response, 'response')
  
  React.useEffect(() => {
    if (response.isSuccess === true) {
      // setMessage(response.data.messagge)
      alert(response.data.message)
    }
  },[response])
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#fff",mt:'5rem' }}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{ backgroundColor: "#fff" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Post Event
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <Button variant="contained" sx={{ width: "100%" }}>
                <input type="file" onChange={(e)=>setprofile(e.target.files[0])} /> choose pic
              </Button>
              <TextField
                margin="normal"
                required
                fullWidth
                name="title"
                label="Title"
                onChange={(e)=>setTitle(e.target.value)}
                type="text"
                id="title"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container >
                  <Grid item xs={12} sx={{
                      display: "flex",
                      justifyContent: "center",
                      aligntems: "center",
                    }}
                  >
                    <DatePicker
                      sx={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      label="Event Start Date"
                      value={sdt || ""}
                      onChange={(newValue) => setSdt(newValue)}
                    />
                  </Grid>
                  <Grid
                    item xs={12}
                    sx={{mt:'0.4rem',
                      display: "flex",
                      justifyContent: "center",
                      aligntems: "center",
                    }}
                  >
                    <DatePicker
                      sx={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      label="Event End Date"
                      value={edt || ""}
                      onChange={(newValue) => setEdt(newValue)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      aligntems: "center",
                    }}
                  >
                    <DemoContainer
                      sx={{ width: "100%" }}
                      components={["TimePicker"]}
                    >
                      <TimePicker
                        // defaultValue={dayjs('2022-04-17T15:30')}
                        sx={{ width: "100%" }}
                        views={["hours", "minutes", "seconds"]}
                        label="Start Time"
                        onChange={(newValue) => {
                          setTim(newValue);
                        }}
                        // value={tim || ""}
                      />
                    </DemoContainer>
                  </Grid>
                </Grid>
              </LocalizationProvider>

              <FormControl fullWidth sx={{mt:'0.4rem'}}>
                <InputLabel id="demo-simple-select-label">Select Event Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category_name}
                  label="Select Event Category"
                  onChange={(e) => setCatname(e.target.value)}
                >
                  {isSuccess === true ? data.data?.map((el, i) => {
                    return (
                      <MenuItem key={i} value={el.category_name}>{el.category_name}</MenuItem>
                  )}) :null}
                  
                 
                </Select>
              </FormControl>

              {/* <FormControl fullWidth sx={{mt:'0.4rem'}}>
                <InputLabel id="demo-simple-select-label">location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="location"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <MenuItem value={'Ten'}>Ten</MenuItem>
                  <MenuItem value={'Twenty'}>Twenty</MenuItem>
                  <MenuItem value={'Thirty'}>Thirty</MenuItem>
                </Select>
              </FormControl> */}

              <TextField
                id="filled-multiline-static"
                label="location"
                rows={4}
                defaultValue="Default Value"
                // variant="filled"
                sx={{ width: "100%", mt: '0.4rem' }}
                value={location||''}
                onChange={(e)=>setLocation(e.target.value)}
              />

              <TextField
                id="filled-multiline-static"
                label="description"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="filled"
                sx={{ width: "100%", mt: '0.4rem' }}
                value={description||''}
                onChange={(e)=>setDescription(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onHandlePost}
              >
                Post
              </Button>
             
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
