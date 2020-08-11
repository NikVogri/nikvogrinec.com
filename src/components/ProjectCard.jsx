import React from "react"
import ListSvg from "../images/icons/list.svg"

const ProjectCard = ({ icon, name, description }) => {
  return (
    <div className="projects-card flex ">
      <div>
        <img src={ListSvg} alt="list icon" className="mr-12" />
      </div>
      <div>
        <h4 className="m-0">Freecourso</h4>
        <p className="m-0 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          dapibus dui. Nulla in diam ac ex consequat finibus vel efficitur dui.
          Donec et rutrum tortor, pharetra consequat enim.{" "}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
