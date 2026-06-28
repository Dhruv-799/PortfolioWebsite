import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Aboutme from "./Navbar/NavbarComponents/Aboutme";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import ProfessionalExperience from "./Navbar/NavbarComponents/ProfessionalExperience";
import MinorProjects from "./Navbar/NavbarComponents/MinorProjects";
import Footer from "./Footer/Footer";

const MobileView = ({ value, setValue, mobileScreen }) => {
  return (
    <Box className="mobileViewContainer">
      <Box className="drawerContainer">
        <LeftDrawer setValue={setValue} value={value} />
      </Box>

      <Box className="contentContainer">
        {value === "1" && <Aboutme />}
        {value === "2" && <ProfessionalExperience mobileScreen={mobileScreen}/>}
        {value === "4" && <MinorProjects />}
      </Box>
      <Footer />
    </Box>
  );
};

export default MobileView;
