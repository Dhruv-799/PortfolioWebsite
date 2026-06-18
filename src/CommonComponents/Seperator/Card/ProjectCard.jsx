import React from "react";
import "./ProjectCard.css";
import Image from "mui-image";
import { Box, Button, Typography } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <Image
          src={image}
          width="fit-content"
          height={100}
          showLoading
          fit="contain"
          className="image"
        />
      </div>
      <Box className="cardTitle">
        <Typography variant="h6">{title}</Typography>
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
    </div>
  );
};

export default ProjectCard;
