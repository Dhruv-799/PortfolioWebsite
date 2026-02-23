import { useState } from "react";
import { Box } from "@mui/material";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import InterviewQues from "./InterviewQues";
import JavaScriptObjectsGuide from "./ObjectsGuide";
import "./App.css";
import LeftDrawer from "./LeftDrawer";

import React from "react";
import Aboutme from "./Navbar/NavbarComponents/Aboutme";
import ProfessionalExperience from "./Navbar/NavbarComponents/ProfessionalExperience";
import NonAcademics from "./Navbar/NavbarComponents/NonAcademics";
import MinorProjects from "./Navbar/NavbarComponents/MinorProjects";

import Tab from "@mui/material";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
              <Tab label="Item Four" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Aboutme />
          </TabPanel>
          <TabPanel value="2">
            <ProfessionalExperience />
          </TabPanel>
          <TabPanel value="3">
            <NonAcademics />
          </TabPanel>
          <TabPanel value="4">
            <MinorProjects />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default App;
