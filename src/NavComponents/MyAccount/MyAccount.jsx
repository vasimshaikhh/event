import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import People from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useGetUserDetailsQuery } from "../../services/api";
import EmailIcon from "@mui/icons-material/Email";
import MaleIcon from "@mui/icons-material/Male";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function MyAccount() {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [phno, setPhno] = React.useState();
  const [gender, setGender] = React.useState();
  const id = localStorage.getItem("userId");

  const { data, isSuccess, isError } = useGetUserDetailsQuery(id);

  console.log(data, "data");                                                                                       

  React.useEffect(() => {                                                                                                   
    if (isSuccess === true) {
      setName(data.details[0].name);                                                                                                                                                                                           
      setEmail(data.details[0].email);
      setGender(data.details[0].gender);
      setPhno(data.details[0].phone_num);
    }
  }, [isSuccess]);

  const datab = [
    { icon: <People />, label: name, icon2: <EditIcon /> },
    { icon: <EmailIcon />, label: email, icon2: <EditIcon /> },
    { icon: <MaleIcon />, label: gender, icon2: <EditIcon /> },
    { icon: <ContactPhoneIcon />, label: phno, icon2: <EditIcon /> },
  ];

  return (
    <Container maxWidth={"sm"}>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: "dark",
              primary: { main: "rgb(102, 157, 246)" },
              background: { paper: "rgb(5, 30, 52)" },
            },
          })}
        >
          <Paper elevation={0} sx={{ maxWidth: "100%", height: "70vh" }}>
            <FireNav component="nav" disablePadding>
              <ListItemButton component="a" >
                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                <ListItemText
                  sx={{ my: 0 }}
                  primary="Account Details"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
              <Divider />
              <ListItem component="div" disablePadding>
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemIcon>
                    <Home color="primary" />
                  </ListItemIcon>
                  <Link to="/">
                    <ListItemText
                      
                      primary="Home "
                      primaryTypographyProps={{
                        color: "primary",
                        fontWeight: "medium",
                        variant: "body2",
                      }}
                    />
                  </Link>
                </ListItemButton>
                <Link to="/changepass">
                  <Button>Change Password</Button>
                </Link>
              </ListItem>
              <Divider />
              <Box
                sx={{
                  bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: open ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpen(!open)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: open ? 0 : 2.5,
                    "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Change Account Details"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "medium",
                      lineHeight: "20px",
                      mb: "2px",
                    }}
                    secondary="Authentication, Name , Email , Password, Change Details, Change As per Your Choice, Functions, and Machine Learning"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: open ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
                {open &&
                  datab.map((item , i) => (
                    <ListItemButton
                      key={i}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: "rgba(255,255,255,.8)",
                      }}
                    >
                      <ListItemIcon sx={{ color: "inherit" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 18,
                          fontWeight: "medium",
                        }}
                      />
                      <Link to="/changedetails">
                        <ListItemIcon sx={{ color: "inherit" }}>
                          {item.icon2}
                        </ListItemIcon>
                      </Link>
                    </ListItemButton>
                  ))}
              </Box>
            </FireNav>
          </Paper>
        </ThemeProvider>
      </Box>
    </Container>
  );
}
