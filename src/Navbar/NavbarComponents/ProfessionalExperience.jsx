import React, { useState } from "react";
import { experiences } from "../../CommonComponents/Seperator/CommonData/ProfessionalExperience";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import "./ProfessionalExperience.css";

const ProfessionalExperience = () => {
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        margin: "auto",
        py: 5,
        px: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 600,
          mb: 5,
        }}
      >
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
          {/* Timeline */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "50px",
            }}
          >
            <WorkIcon
              sx={{
                color: "#1976d2",
                fontSize: 35,
              }}
            />
          </Box>

          {/* Experience Card */}
          <Card
            elevation={3}
            sx={{
              flex: 1,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={600}>
                {exp.role}
              </Typography>

              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                {exp.company}
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                {exp.organization}
              </Typography>

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
      {/* <Button variant="contained" onClick={() => setIsTechModalOpen(true)}>
        Technologies
      </Button>
      {isTechModalOpen && (
        <Box className="techName">
        </Box>
      )} */}
    </Box>
  );
};

export default ProfessionalExperience;
