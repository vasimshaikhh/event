import React from 'react'
import './GallerySection.css'
import img1 from "../../../../src/assets/images/gallery/1.image.jpg"; 
import img2 from "../../../../src/assets/images/gallery/2.image.jpg"; 
import img3 from "../../../../src/assets/images/gallery/3.image.jpg"; 
import img4 from "../../../../src/assets/images/gallery/4.image.jpg"; 
import img5 from "../../../../src/assets/images/gallery/5.image.jpg"; 
import img6 from "../../../../src/assets/images/gallery/6.image.jpg"; 
import img7 from "../../../../src/assets/images/gallery/7.image.jpg"; 
import img8 from "../../../../src/assets/images/gallery/8.image.jpg"; 
import StarIcon from "@mui/icons-material/Star";
import { Box, Container, Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";



const GallerySection = () => {
  return (
    <>
      <ImageList sx={{ width: "100%",mt:'1rem' }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader
            sx={{ display: "flex", justifyContent: "center" }}
            component="div"
          >
            --------
            <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
            <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
            Our Gallery
            <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
            <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
            --------
          </ListSubheader>
        </ImageListItem>
      </ImageList>
      <Container >
        <ImageList sx={{ width: "100%" }}>
          {/* <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              sx={{ display: "flex", justifyContent: "center" }}
              component="div"
            >--------
              <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
              <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
              Our Gallery
              <StarIcon sx={{ mt: "0.7rem", color: "red" }} />
              <StarIcon sx={{ mt: "0.7rem", color: "red" }} />--------
            </ListSubheader>
          </ImageListItem> */}
          {/* {itemData.map((item) => ( */}
          <ImageListItem>
            <img
              className="qwe"
              src={`${img1}?w=248&fit=crop&auto=format`}
              srcSet={`${img1}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
              style={{ height: "60px" }}
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img2}?w=248&fit=crop&auto=format`}
              srcSet={`${img2}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img3}?w=248&fit=crop&auto=format`}
              srcSet={`${img3}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img4}?w=248&fit=crop&auto=format`}
              srcSet={`${img4}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img5}?w=248&fit=crop&auto=format`}
              srcSet={`${img5}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img6}?w=248&fit=crop&auto=format`}
              srcSet={`${img6}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img7}?w=248&fit=crop&auto=format`}
              srcSet={`${img7}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${img8}?w=248&fit=crop&auto=format`}
              srcSet={`${img8}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={img1}
              loading="lazy"
            />
            <ImageListItemBar
              title="hii there"
              subtitle={"shello there"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${"no222"}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          {/* ))} */}
        </ImageList>
      </Container>
    </>
  );
}

export default GallerySection
