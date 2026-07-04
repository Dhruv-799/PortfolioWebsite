import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import MinorProjects from "../Navbar/NavbarComponents/MinorProjects";
import "./Projects.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="projects-section" id="projects">
      <Box className="section-container">
        <Typography variant="h3" className="section-heading">
          Projects
        </Typography>
        <MinorProjects mobileScreen={isMobile} />
      </Box>
    </Box>
  );
};

export default Projects;
