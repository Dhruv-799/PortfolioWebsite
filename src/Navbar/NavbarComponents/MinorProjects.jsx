import React from "react";
import ProjectCard from "../../CommonComponents/Seperator/Card/ProjectCard";
import MinorProjectData from "../../CommonComponents/Seperator/CommonData/MinorProjectData";
import Box from "@mui/material/Box";
const MinorProjects = () => {
  return (
    <Box>
      {MinorProjectData.map((projectdata) => (
        <ProjectCard
        image={projectdata.image}
          key={projectdata.id}
          title={projectdata.title}
          description={projectdata.description}
          link={projectdata.link}
        />
      ))}
    </Box>
  );
};

export default MinorProjects;
