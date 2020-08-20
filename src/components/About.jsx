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
          My name is <span>Nik Vogrinec</span>, and I come from a small country
          in the center of Europe called <span>Slovenia</span>. I found my
          passion for programming while browsing the web and wondering how
          websites are built. I have a bunch of <span>technologies</span> in my
          tool belt, many of which I use daily. I specialize in{" "}
          <span>web development</span>. Most of my days are spent with{" "}
          <span>PHP or Node</span> on the back-end and <span>React</span> on the
          front-end with <span>Tailwind</span> and
          <span> Bootstrap</span> for styling. <span>I love learning</span> new
          technologies and implementing them in my various projects. Let's have
          a chat?
        </p>
      </div>
      <ul className="list-none m-0 p-0">
        <li>
          <a href="http://www.github.com/nikvogri">
            <img src={GithubBlue} alt="github" /> <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nik-vogrinec">
            <img src={LinkedInBlue} alt="linkedin" /> <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a>
            <img src={ResumeBlue} alt="resume" />{" "}
            <p>Resume(PDF) &lt;- Coming soon</p>
          </a>
        </li>
      </ul>

      <div className="text-center button-container">
        <Button text="Send me an email" link="mailto:vogrinec.nik@gmail.com" />
        <p className="md:text-2xl mt-12 font-light">
          For business inquiries or if you have a question, please feel free to
          email me any time. I’ll try to respond as soon as I can
        </p>
      </div>
    </section>
  )
}

export default About
