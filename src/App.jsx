import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

import React from "react";
import Aboutme from "./Navbar/NavbarComponents/Aboutme";
import ProfessionalExperience from "./Navbar/NavbarComponents/ProfessionalExperience";
import NonAcademics from "./Navbar/NavbarComponents/NonAcademics";
import MinorProjects from "./Navbar/NavbarComponents/MinorProjects";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Footer from "./Footer/Footer";
import LaptopContent from "./LaptopContent";
import MobileView from "./MobileView";

function App() {
  const [value, setValue] = useState("1");
  const [width, setWidth] = useState(window.innerWidth);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileScreen = width <= 768;

  return (
    <Box>
      {!mobileScreen ? (
        <LaptopContent />
      ) : (
        <MobileView value={value} setValue={setValue} mobileScreen={mobileScreen} />
      )}
    </Box>
  );
}

export default App;
