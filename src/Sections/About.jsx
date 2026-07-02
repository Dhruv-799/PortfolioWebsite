import React from "react";
import { Box } from "@mui/material";
import Aboutme from "../Navbar/NavbarComponents/Aboutme";
import "./About.css";

const About = () => {
  return (
    <Box className="about-section" id="about">
      <Box className="section-container">
        <Aboutme />
      </Box>
    </Box>
  );
};

export default About;
