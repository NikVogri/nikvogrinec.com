import React from "react"
import PropTypes from "prop-types"

import ListSvg from "../images/icons/list.svg"

const ProjectCard = ({ icon, name, description, urls }) => {
  return (
    <div className="projects-card flex ">
      <div>
        <img
          src={ListSvg}
          alt="list icon"
          className="mr-12 projects-card-icon"
        />
      </div>
      <div>
        <p className="m-0 project-title">{name}</p>
        <p className="m-0 mt-2">{description}</p>
        <div className="inline-flex">
          {urls.map(url => (
            <a
              href={url.url}
              key={url.name}
              className="project-links inline-block project-link"
            >
              {url.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired,
}

export default ProjectCard
