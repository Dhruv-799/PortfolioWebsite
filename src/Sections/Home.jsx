import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChevronDown } from "lucide-react";
import "./Home.css";
import Aboutme from "../Navbar/NavbarComponents/Aboutme";
import { Download } from "@mui/icons-material";
import TypewriterEffect from "../CommonComponents/Seperator/TypewriterEffect/TypewriterEffect";

const Home = ({ onScroll }) => {
  const handleScroll = () => {
    const Skills = document.getElementById("skills");
    if (Skills) {
      Skills.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Dhruv_Frontend.pdf";
    link.setAttribute("download", "Dhruv_Frontend.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box className="home-section" id="home">
      <Aboutme />
      <Box className="home-content">
        <Typography variant="h2" className="hero-title">
          Frontend Developer & React Engineer
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Building high-performance, scalable web applications
        </Typography>
        <Typography variant="body1" className="hero-description">
          Most Frontend Developers think in Interface, I don't.
        </Typography>
        <Typography variant="body1" className="typewriter-label">
          I Think In:{" "}
          <span className="typewriter">
            <TypewriterEffect />
          </span>
        </Typography>
        <Box className="actionButtonContainer">
          <Button
            variant="outlined"
            size="large"
            onClick={handleScroll}
            className="explore-work-button"
          >
            Explore My Work
          </Button>
          <Button
            className="cta-button"
            variant="contained"
            startIcon={<Download />}
            size="large"
            tabIndex={-1}
            onClick={handleResumeDownload}
          >
            Resume
          </Button>
        </Box>
      </Box>
      <Box className="scroll-indicator" onClick={handleScroll}>
        <ChevronDown size={32} />
      </Box>
    </Box>
  );
};

export default Home;
