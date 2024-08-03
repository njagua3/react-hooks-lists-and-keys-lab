import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => (
          <ProjectItem
            // Unique key for each ProjectItem
            key= {project.id}
            name={project.name}
            about= {project.about}
            technologies={project.technologies}
            // Pass any other props if needed
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
