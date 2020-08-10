import React from "react"
import ProjectCard from "./ProjectCard"
import Title from "./Title"

import "../styles/sass/projects.scss"

const Projects = () => {
  return (
    <section className="projects  py-16 md:py-0" id="projects">
      <Title title="Some Projects I’ve Worked On" />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <div className="projects-container"></div>
    </section>
  )
}

export default Projects
