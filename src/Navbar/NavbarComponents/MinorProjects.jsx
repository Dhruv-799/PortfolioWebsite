import React from "react";
import ProjectCard from "../../CommonComponents/Seperator/Card/ProjectCard";
import MinorProjectData from "../../CommonComponents/Seperator/CommonData/MinorProjectData";

const MinorProjects = () => {
  return (
    <div>
      {MinorProjectData.map((projectdata) => (
        <ProjectCard
        image={projectdata.image}
          key={projectdata.id}
          title={projectdata.title}
          description={projectdata.description}
          link={projectdata.link}
        />
      ))}
    </div>
  );
};

export default MinorProjects;
