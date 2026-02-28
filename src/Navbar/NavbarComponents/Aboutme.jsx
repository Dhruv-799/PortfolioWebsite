import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../../assets/pfp.jpeg";
import Image from "mui-image";
import pfp from "../../assets/pfp.jpeg";
import "./AboutMe.css";
import { Download } from "@mui/icons-material";
import Seperator from "../../CommonComponents/Seperator/Seperator/Seperator";

const Aboutme = () => {
  const handleResumeDownload = () => {
    {
    const link = document.createElement("a");
    link.href = "public/Dhruv_Frontend.pdf";   // path from public folder
    link.download = "Resume.pdf"; // rename while downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  };

  return (
    <Box>
      <Box className="aboutSection">
        <Image
          src={pfp}
          width="fit-content"
          height={300}
          showLoading
          fit="contain"
          className="image"
        />
        <Seperator />
        <Box className="textContainer">
          <Typography variant="h4">Summary</Typography>
          <Typography variant="body1">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
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
