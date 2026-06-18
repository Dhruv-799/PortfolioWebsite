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
      link.href = "public/Dhruv_Frontend.pdf"; // path from public folder
      link.download = "Resume.pdf"; // rename while downloading
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
            Frontend Developer with 4 years of experience building scalable,
            high-performance web applications using React.js, JavaScript, Redux,
            Material UI, and modern frontend technologies. Experienced in
            developing enterprise-grade solutions for global clients across
            government, healthcare, and financial domains, with a strong focus
            on responsive design, API integration, component-driven
            architecture, and application performance optimization. In addition
            to frontend development, I have hands-on experience in Data
            Analytics using SQL, Python, Power BI, and Excel, enabling me to
            transform complex data into actionable business insights. I enjoy
            solving real-world problems through technology, collaborating with
            cross-functional teams, and continuously exploring new tools and
            frameworks to deliver impactful digital experiences. Passionate
            about creating intuitive user interfaces, writing clean and
            maintainable code, and leveraging data-driven decision-making to
            build products that provide measurable business value.
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
