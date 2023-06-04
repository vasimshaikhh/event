import React from 'react'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useGoogleMaps } from "react-hook-google-maps";
import StarIcon from "@mui/icons-material/Star";

import { Box, Card, ImageList, ImageListItem, ListSubheader } from '@mui/material';

const MapSection = () => {
      const { ref, map, google } = useGoogleMaps(
        // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
        "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
        // NOTE: even if you change options later
        {
          center: { lat: 0, lng: 0 },
          zoom: 3,
        }
      );
  return (
    <Card>
      {/* <CardContent> */}
      <ImageList sx={{ width: "100%", mt: "1rem" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader
            sx={{ display: "flex", justifyContent: "center" }}
            component="div"
          >
            <StarIcon sx={{ mt: "0.7rem", color: "black" }} />
            <StarIcon sx={{ mt: "0.7rem", color: "black" }} />
            Your Location
            <StarIcon sx={{ mt: "0.7rem", color: "black" }} />
            <StarIcon sx={{ mt: "0.7rem", color: "black" }} />
            
          </ListSubheader>
        </ImageListItem>
      </ImageList>
      <div ref={ref} style={{ width: "100%", height: "320px"   }}>
        <Box></Box>
      </div>
      {/* </CardContent> */}
    </Card>
  );
}

export default MapSection
