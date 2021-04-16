import React from "react"

import FaCodepen from "../images/icons/FaCodepen.svg"
import FaGithub from "../images/icons/FaGithub.svg"
import FaLinkedin from "../images/icons/FaLinkedin.svg"

import "../styles/sass/footer.scss"

const Footer = () => {
  return (
    <footer className="footer py-8 md:py-12">
      <div className=" container md:items-center md:flex md:justify-between text-center">
        <p className="m-0 mb-2 md:mb-0">Made in Slovenia</p>
        <p className="m-0 mb-6 md:mb-0">Copyright {new Date().getFullYear()}. Nik Vogrinec</p>
        <div className="flex items-center justify-center">
          <a href="https://www.linkedin.com/in/nik-vogrinec/">
            <img src={FaLinkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/NikVogri">
            <img src={FaGithub} alt="Github" />
          </a>
          <a href="https://codepen.io/nickvogri">
            <img src={FaCodepen} alt="CodePen" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
