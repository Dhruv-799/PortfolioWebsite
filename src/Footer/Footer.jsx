import { Box, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import LineSeperator from "../CommonComponents/Seperator/LineSeperator/LineSeperator";
const Footer = () => {
  return (
    <Box className="footerContainer">
      <Typography
        variant="h6"
        color="white"
        align="center"
        sx={{ paddingTop: "30px" }}
      >
        Made with ❤️ by Dhruv
      </Typography>
      <Box className="contactInfo">
        <Typography variant="body2" color="white" align="center">
          Contact: 9650853667, 8368803498
        </Typography>
        <LineSeperator />
        <Typography variant="body2" color="white" align="center">
          Email: shadhruv09@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
