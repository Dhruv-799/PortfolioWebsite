import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChevronDown } from "lucide-react";
import "./Home.css";

const Home = ({ onScroll }) => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="home-section" id="home">
      <Box className="home-content">
        <Typography variant="h2" className="hero-title">
          Frontend Developer & React Engineer
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Building high-performance, scalable web applications
        </Typography>
        <Typography variant="body1" className="hero-description">
          Specialized in React, TypeScript, and modern UI/UX design.
          4+ years of experience with enterprise-grade applications.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleScroll}
          className="cta-button"
        >
          Explore My Work
        </Button>
      </Box>
      <Box className="scroll-indicator" onClick={handleScroll}>
        <ChevronDown size={32} />
      </Box>
    </Box>
  );
};

export default Home;
