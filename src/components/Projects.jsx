import React from "react"
import ProjectCard from "./ProjectCard"
import Title from "./Title"

import projects from "../data/project"

import "../styles/sass/projects.scss"

const Projects = () => {
  return (
    <section className="projects  py-16 md:py-0" id="projects">
      <Title title="Projects I’ve Worked On" />
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            name={project.title}
            description={project.description}
            urls={project.urls}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
