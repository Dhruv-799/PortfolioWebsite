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
      <Typography variant="h4" className="section-heading">
        Professional Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 3,
            mb: 5,
          }}
        >
          {/* Experience Card */}
          <Card
            elevation={3}
            sx={{
              flex: 1,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Box className="experience-header">
                <Typography variant="h5" fontWeight={600}>
                  {exp.role}
                </Typography>
              </Box>

              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                {exp.organization}
              </Typography>
              <Box className="clientNameContainer">
                <Box
                  component="img"
                  src={exp.icon}
                  alt={`${exp.company} Icon`}
                  sx={{
                    width: 25,
                    height: 25,
                    mb: 2,
                    objectFit: "contain",
                    mr: 2,
                    color: "#1976d2",
                  }}
                />
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.company}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {exp.duration}
              </Typography>

              <List dense>
                {exp.achievements.map((item, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      py: 0.3,
                      alignItems: "flex-start",
                    }}
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
