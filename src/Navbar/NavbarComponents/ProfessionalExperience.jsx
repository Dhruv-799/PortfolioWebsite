import React, { useState } from "react";
import { experiences } from "../../CommonComponents/Seperator/CommonData/ProfessionalExperience";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./ProfessionalExperience.css";

const ProfessionalExperience = ({ mobileScreen }) => {
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  return (
    <Box>
      <Typography
        variant="h4"
        className="section-heading"
      >
        Professional Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Box
          key={index}
          className="experience-box"
        >
          {/* Experience Card */}
          <Card
            elevation={3}
            className="experience-card"
          >
            <CardContent>
              <Box className="experience-header">
                <Box
                  component="img"
                  src={exp.icon}
                  alt={`${exp.company} Icon`}
                  className="experience-icon"
                />
                <Typography variant="h5" fontWeight={600}>
                  {exp.role}
                </Typography>
              </Box>

              <Typography variant="h6" color="primary" className="experience-company">
                {exp.company}
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                {exp.organization}
              </Typography>

              <Typography variant="body2" color="text.secondary" className="experience-duration">
                {exp.duration}
              </Typography>

              <List dense>
                {exp.achievements.map((item, idx) => (
                  <ListItem
                    key={idx}
                    className="experience-list-item"
                  >
                    <ListItemText primary={`• ${item}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ProfessionalExperience;
