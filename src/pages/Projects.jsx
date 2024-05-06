import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";
import { projectsData } from "../data/projectsData";
import "./pages.css";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  const handleSearch = (searchTerm) => {
    const filteredProjects = projectsData.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProjects(filteredProjects);
  };

  return (
    <div className="projects-container">
      <div className="searchbar-holder">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
