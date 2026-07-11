import React from "react";
import ProjectCard from "../../CommonComponents/Seperator/Card/ProjectCard";
import MinorProjectData from "../../CommonComponents/Seperator/CommonData/MinorProjectData";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./MinorProjects.css";

const MinorProjects = ({ mobileScreen }) => {
  return (
    <Box>
      {mobileScreen ? (
        <Box className="minorProjectHeading">
          <Typography variant="h6">Minor Projects</Typography>
        </Box>
      ) : (
        <Box></Box>
      )}
      <Box className="projectsRow" role="list">
        {MinorProjectData.map((projectdata) => (
          <Box key={projectdata.id} role="listitem" className="projectItem">
            <ProjectCard
              image={projectdata.image}
              title={projectdata.title}
              description={projectdata.description}
              link={projectdata.link}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MinorProjects;
