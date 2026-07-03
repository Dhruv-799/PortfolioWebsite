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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    // { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    // { id: "contact", label: "Contact" },
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
          className={`nav-button ${activeSection === item.id ? "active" : ""}`}
          sx={{
            color: activeSection === item.id ? "#1976d2" : "#333",
            fontWeight: activeSection === item.id ? 600 : 500,
            borderBottom:
              activeSection === item.id ? "2px solid #1976d2" : "none",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#1976d2",
            },
          }}
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
          <Box className="navbar-logo">
            <h3>Dhruv</h3>
          </Box>
          <ContactModal />
          {isMobile ? (
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              sx={{ color: "#333" }}
            >
              <Menu size={24} />
            </IconButton>
          ) : (
            navContent
          )}
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className="drawer-content">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <X size={24} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color: activeSection === item.id ? "#1976d2" : "#333",
                  fontWeight: activeSection === item.id ? 600 : 500,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
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
