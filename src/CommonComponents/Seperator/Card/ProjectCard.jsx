import React from "react";
import "./ProjectCard.css";
import Image from "mui-image";
import { Box, Button, Grid, Typography } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Grid className="projectCard" item xs={12} sm={6} md={4}>
      <Box className="cardContainer">
        <Box className="imageContainer">
          <Image src={image} className="dogImage" showLoading fit="cover" />
        </Box>
        <Box className="cardTitle">
          <Typography>
            {title}
          </Typography>
        </Box>

        <Typography variant="body2" className="description">
          {description}
        </Typography>
        <Box className="buttonContainer">
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
