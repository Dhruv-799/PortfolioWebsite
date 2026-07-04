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
  const skills = [
    "React",
    "Redux",
    "Material UI",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Python",
    "Power BI",
    "Git",
    "Jest",
  ];

  return (
    <Box className="aboutSection">
      <Box className="leftContentContainer">
        <Image src={pfp} showLoading className="image" />
        <Box component="span" className="typewriterContainer">
          {/* <Box className="typewriterContainer">
            <Typography variant="h6" className="typewriterLabel">
              I Think In:
            </Typography>
            <Box component="span" className="typewriter">
              <TypewriterEffect />
            </Box>
          </Box> */}
          <Typography variant="h5" className="myName">
            DHRUV SHARMA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutme;
