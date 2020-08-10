import React from "react"
import "../styles/sass/footer.scss"

// svgs
import GithubSvg from "../images/icons/FaGithub.svg"
import LinkedIn from "../images/icons/FaLinkedin.svg"
import CodepenLink from "../images/icons/FaCodepen.svg"

const Footer = () => {
  return (
    <footer className="footer py-8 md:py-12">
      <div className=" container md:items-center md:flex md:justify-between text-center">
        <p className="m-0 mb-2 md:mb-0">Made in Slovenia</p>
        <p className="m-0 mb-6 md:mb-0">Copyright 2020. Nik Vogrinec</p>
        <div className="flex items-center justify-center">
          <a href={`http://www.github.com`}>
            <img src={GithubSvg} alt={`Github link`} />
          </a>
          <a href={`http://www.linkedin.com`}>
            <img src={LinkedIn} alt={`Linkedin link`} />
          </a>
          <a href={`http://www.codepen.com`}>
            <img src={CodepenLink} alt={`Codepen link`} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
