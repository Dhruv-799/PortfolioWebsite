import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../../assets/pfp.jpeg";
import Image from "mui-image";
import pfp from "../../assets/pfp.jpeg";
import "./AboutMe.css";
import { Download } from "@mui/icons-material";
import Seperator from "../../CommonComponents/Seperator/Seperator/Seperator";
import TypewriterEffect from "../../CommonComponents/Seperator/TypewriterEffect/TypewriterEffect";

const Aboutme = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Dhruv_Frontend.pdf";
    link.setAttribute("download", "Dhruv_Frontend.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Box className="aboutSection">
        <Box className="leftContentContainer">
          <Image src={pfp} showLoading className="image" />
          <Box component="span" className="typewriterContainer">
            <Box className="typewriterContainer">
              <Typography variant="h6" className="typewriterLabel">
                I Think In:
              </Typography>

              <Box component="span" className="typewriter">
                <TypewriterEffect />
              </Box>
            </Box>
          </Box>
        </Box>

        <Seperator />
        <Box className="textContainer">
          <Box className="summaryHeading">
            <Typography variant="h4">Summary</Typography>
          </Box>
          <Box>
            <Typography variant="body1" className="summaryText">
              A React engineer with 4 years of experience shipping enterprise
              grade/ High-stakes/high- traffic/production grade applications for
              global clients — including Apple and India&#39;s Government
              e-Marketplace (GeM) — through Tata Consultancy Services. I
              specialise in building UIs that don&#39;t just look good, they
              perform, scale, and hold up under pressure.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="buttonContainer">
        <Button
          variant="contained"
          startIcon={<Download />}
          tabIndex={-1}
          onClick={handleResumeDownload}
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Aboutme;
