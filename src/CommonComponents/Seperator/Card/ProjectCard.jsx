import React from "react";
import "./ProjectCard.css";
import Image from "mui-image";
import { Box, Button, Grid, Typography } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Grid className="projectCard" item xs={12} sm={6} md={4}>
      <Box className="cardContainer">
        <Box className="imageContainer">
          <Image
            src={image}
            width="fit-content"
            height={100}
            showLoading
            fit="contain"
            className="dogImage"
          />
        </Box>
        <Box className="cardTitle">
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.25rem",
              },
              fontWeight: 600,
            }}
          >
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
