import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "Guru Gobind Singh Indraprastha University",
      field: "Electrical and Electronics Engneering",
      year: "2021",
      description: "Specialized in Software Development and Web Technologies",
    }
  ];

  return (
    <Box className="education-section" id="education">
      <Box className="section-container">
        <Typography variant="h3" className="section-title">
          Education
        </Typography>

        <Grid container spacing={3}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card className="education-card">
                <CardContent>
                  <Typography variant="h6" className="degree">
                    {edu.degree}
                  </Typography>
                  <Typography variant="body1" className="institution">
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" className="field">
                    {edu.field}
                  </Typography>
                  <Typography variant="caption" className="year">
                    {edu.year}
                  </Typography>
                  <Typography variant="body2" className="description">
                    {edu.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Education;
