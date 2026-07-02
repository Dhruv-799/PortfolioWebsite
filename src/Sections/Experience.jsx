import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProfessionalExperience from "../Navbar/NavbarComponents/ProfessionalExperience";
import "./Experience.css";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="experience-section" id="experience">
      <Box className="section-container">
        <ProfessionalExperience mobileScreen={isMobile} />
      </Box>
    </Box>
  );
};

export default Experience;
