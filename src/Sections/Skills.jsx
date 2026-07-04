import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Material UI", "CSS/SCSS", "HTML5"],
    },
    {
      category: "Backend & Database",
      skills: ["SQL", "RESTful APIs", "Node.js", "Python"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Jest", "Redux", "Power BI", "Vite", "ESLint"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Mentoring"],
    },
  ];

  return (
    <Box className="skills-section" id="skills">
      <Box className="section-container">
        <Typography variant="h3" className="section-heading">
          Skills & Expertise
        </Typography>

        <Grid container spacing={4} className="skills-grid">
          {skillsData.map((skillGroup) => (
            <Grid item xs={12} sm={6} md={6} key={skillGroup.category}>
              <Box className="skill-category">
                <Typography variant="h6" className="category-title">
                  {skillGroup.category}
                </Typography>
                <Box className="skills-list">
                  {skillGroup.skills.map((skill) => (
                    <Box key={skill} className="skill-chip">
                      <Typography variant="body2">{skill}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
