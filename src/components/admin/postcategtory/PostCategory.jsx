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
import { useAddEventMutation, usePostCategoryMutation } from "../../../services/admin";

const theme = createTheme();

export default function PostCategory() {
    const [url,setUrl] = React.useState()
    const [category,setcategory] = React.useState()
  const [category_name, setCatname] = React.useState()
  
    const [respInfo, response] = usePostCategoryMutation()
  
    const onHandlePost = async(e) => {
      e.preventDefault();
      if (category && category_name && url) {    
        await respInfo({category,category_name , url})
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
                <input type="file" onChange={(e)=>setcategory(e.target.files[0])} /> choose pic
              </Button>
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="category_name"
                label="category_name"
                value={category_name||''}
                onChange={(e)=>setCatname(e.target.value)}
                type="text"
                id="title"
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="url"
                label="URL"
                value={url||''}
                onChange={(e)=>setUrl(e.target.value)}
                type="text"
                id="url"
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


