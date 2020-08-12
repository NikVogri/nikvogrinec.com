import React from "react"

import Title from "./Title"
import Button from "./Button"

import GithubBlue from "../images/icons/github-blue.svg"
import LinkedInBlue from "../images/icons/linkedin-blue.svg"
import ResumeBlue from "../images/icons/resume-blue.svg"

import "../styles/sass/about.scss"

const About = () => {
  return (
    <section className="about  py-16 md:py-0 relative" id="about">
      <Title title="Get to know me" />
      <div className="about-long mb-5">
        <p className="mt-0">
          Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing elit.
          Phasellus non metus eleifend, vehicula magna nec, malesuada mauris.
          Nunc quam turpis, suscipit quis eros at, egestas aliquet nisi. Duis
          scelerisque purus malesuada ante posuere, vel finibus massa
          vestibulum. Vivamus luctus felis eros, eu pellentesque risus commodo
          quis. Duis feugiat <span>eros diam</span>, mollis semper nunc
          malesuada quis. Donec quis feugiat urna. Donec blandit gravida libero
          a bibendum. Integer dui dolor, semper <span>acvestibulum</span>.
        </p>
      </div>
      <ul className="list-none m-0 p-0">
        <li>
          <a href="http://www.github.com">
            <img src={GithubBlue} alt="github" /> <p>Github</p>
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com">
            <img src={LinkedInBlue} alt="linkedin" /> <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="myresume.com">
            {" "}
            <img src={ResumeBlue} alt="resume" /> <p>Resume(PDF)</p>
          </a>
        </li>
      </ul>

      <div className="text-center button-container">
        <Button text="Send me an email" link="mailto:vogrinec.nik@gmail.com" />
        <p className="text-2xl mt-12 font-light">
          For business inquiries or if you have a question, please feel free to
          email me any time. I’ll try to respond as soon as I can
        </p>
      </div>
    </section>
  )
}

export default About
