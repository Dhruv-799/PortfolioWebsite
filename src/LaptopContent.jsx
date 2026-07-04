import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import "./LaptopContent.css";

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

const LaptopContent = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="tabsContainer">
      <TabContext value={value}>
        <Box className="tabListContainer">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About Me" value="1" />
            <Tab label="Professional Experience" value="2" />
            {/* <Tab label="Non-Academics" value="3" /> */}
            <Tab label="Minor Projects" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Aboutme />
        </TabPanel>
        <TabPanel value="2">
          <ProfessionalExperience />
        </TabPanel>
        {/* <TabPanel value="3">
            <NonAcademics />
          </TabPanel> */}
        <TabPanel value="4">
          <MinorProjects />
        </TabPanel>
      </TabContext>
      <Footer />
    </Box>
  );
};
export default LaptopContent;
