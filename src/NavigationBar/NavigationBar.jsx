import React, { useEffect, useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { Menu, X } from "lucide-react";
import "./NavigationBar.css";
import ContactModal from "../CommonComponents/Seperator/ContactModal/ContactModal";

const NavigationBar = ({ activeSection, onNavigate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setIsDrawerOpen(false);
  };

  const navContent = (
    <Box className="nav-items">
      {navItems.map((item) => (
        <Button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={`nav-button ${
            activeSection === item.id ? "active" : ""
          }`}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  return (
    <>
      <Box className="navbar-container">
        <Box className="navbar-content">
          <ContactModal />

          {isMobile ? (
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              className="menu-icon-button"
            >
              <Menu size={24} />
            </IconButton>
          ) : (
            navContent
          )}
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className="drawer-content">
          <Box className="drawer-close-button">
            <IconButton
              onClick={() => setIsDrawerOpen(false)}
            >
              <X size={24} />
            </IconButton>
          </Box>

          <Box className="drawer-nav-items">
            {navItems.map((item) => (
              <Button
                key={item.id}
                fullWidth
                onClick={() => handleNavClick(item.id)}
                className={`drawer-nav-button ${
                  activeSection === item.id
                    ? "active"
                    : ""
                }`}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationBar;