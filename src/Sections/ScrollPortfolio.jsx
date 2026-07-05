import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import NavigationBar from "../NavigationBar/NavigationBar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Footer/Footer";
import "./ScrollPortfolio.css";

const ScrollPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of section must be visible
        rootMargin: "-70px 0px -30% 0px", // Account for fixed navbar
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll(
      "[id='home'], [id='about'], [id='skills'], [id='experience'], [id='projects'], [id='contact']"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="scroll-portfolio">
      <NavigationBar activeSection={activeSection} onNavigate={handleNavigate} />

      <Box className="portfolio-content">
        <Home />
        <Skills />
        <Experience />
        <Projects />
      </Box>

      <Footer />
    </Box>
  );
};

export default ScrollPortfolio;
