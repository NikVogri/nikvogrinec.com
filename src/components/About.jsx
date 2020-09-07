import React, { useContext } from "react"

import Title from "./Title"
import Button from "./Button"

import ThemeContext from "../Context/ThemeContext"

import "../styles/sass/about.scss"

const About = () => {
  const data = useContext(ThemeContext)
  console.log(data)

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
      <ul className="list-none socials m-0 p-0">
        <li>
          <a href="http://www.github.com/nikvogri">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="24"
              viewBox="0 0 22 26"
            >
              <title>github-square</title>
              <path d="M20 1.6h-17.6c-1.33 0-2.4 1.07-2.4 2.4v17.6c0 1.33 1.07 2.4 2.4 2.4h17.6c1.33 0 2.4-1.07 2.4-2.4v-17.6c0-1.33-1.07-2.4-2.4-2.4z m-6.13 19.18c-0.42 0.08-0.58-0.19-0.58-0.4 0-0.27 0.01-1.65 0.01-2.76 0-0.78-0.26-1.28-0.57-1.54 1.85-0.2 3.8-0.46 3.81-3.65 0-0.91-0.33-1.37-0.86-1.95 0.09-0.21 0.37-1.1-0.09-2.25-0.7-0.21-2.29 0.9-2.28 0.89-0.66-0.19-1.38-0.28-2.08-0.28-0.71 0-1.42 0.1-2.08 0.28 0 0-1.59-1.11-2.29-0.89-0.46 1.15-0.18 2.03-0.08 2.25-0.53 0.58-0.78 1.04-0.78 1.95 0 3.18 1.86 3.45 3.71 3.65-0.24 0.21-0.46 0.58-0.53 1.12-0.48 0.21-1.69 0.58-2.41-0.7-0.46-0.79-1.28-0.86-1.28-0.85-0.81-0.01-0.06 0.51-0.05 0.51 0.54 0.25 0.92 1.21 0.92 1.21 0.48 1.49 2.81 0.98 2.8 0.98 0 0.7 0.01 1.83 0.01 2.03 0 0.21-0.15 0.48-0.57 0.4-3.3-1.11-5.61-4.25-5.61-7.91 0-4.59 3.51-8.08 8.1-8.08s8.31 3.49 8.31 8.08c0.01 3.67-2.24 6.82-5.54 7.91z m-4.91-3.05c-0.1 0.02-0.19-0.02-0.2-0.09-0.01-0.08 0.06-0.14 0.16-0.16 0.1-0.01 0.19 0.03 0.19 0.1 0.01 0.07-0.05 0.13-0.15 0.15z m-0.48-0.05c0 0.07-0.08 0.12-0.17 0.12-0.11 0.01-0.19-0.05-0.19-0.12 0-0.07 0.08-0.12 0.18-0.12 0.1-0.01 0.19 0.05 0.18 0.12z m-0.68-0.05c-0.02 0.07-0.12 0.1-0.21 0.06-0.1-0.02-0.16-0.1-0.14-0.16 0.02-0.07 0.12-0.1 0.21-0.07 0.1 0.03 0.17 0.11 0.14 0.17z m-0.62-0.27c-0.05 0.06-0.14 0.05-0.21-0.03-0.08-0.07-0.1-0.16-0.05-0.21 0.05-0.06 0.14-0.05 0.22 0.03 0.07 0.07 0.09 0.17 0.04 0.21z m-0.45-0.46c-0.05 0.03-0.13 0-0.19-0.07s-0.06-0.16 0-0.2c0.06-0.05 0.14-0.01 0.19 0.07 0.06 0.08 0.06 0.17 0 0.2z m-0.33-0.48c-0.05 0.05-0.12 0.02-0.17-0.03-0.06-0.07-0.07-0.14-0.02-0.18 0.05-0.05 0.12-0.02 0.17 0.03 0.06 0.07 0.07 0.14 0.02 0.18z m-0.33-0.37c-0.02 0.05-0.09 0.06-0.14 0.02-0.07-0.03-0.1-0.09-0.08-0.13 0.02-0.03 0.08-0.05 0.14-0.02 0.07 0.03 0.1 0.09 0.08 0.13z"></path>
            </svg>{" "}
            <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nik-vogrinec">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="24"
              viewBox="0 0 22 26"
            >
              <title>linkedin</title>
              <path d="M20.8 1.6h-19.21c-0.88 0-1.59 0.73-1.59 1.61v19.17c0 0.89 0.72 1.62 1.6 1.62h19.2c0.88 0 1.6-0.73 1.6-1.62v-19.17c0-0.89-0.72-1.61-1.6-1.61z m-14.03 19.2h-3.32v-10.69h3.32v10.69z m-1.66-12.15c-1.07 0-1.93-0.87-1.93-1.92s0.86-1.93 1.93-1.93c1.06 0 1.93 0.87 1.92 1.93 0 1.07-0.86 1.93-1.92 1.92z m14.11 12.15h-3.32v-5.2c0-1.24-0.03-2.84-1.73-2.83-1.73 0-2 1.35-1.99 2.74v5.29h-3.33v-10.69h3.19v1.46h0.05c0.45-0.84 1.53-1.73 3.14-1.72 3.36 0 3.99 2.21 3.99 5.09v5.86z"></path>
            </svg>{" "}
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="24"
              viewBox="0 0 22 26"
            >
              <g fill="none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="24"
                  viewBox="0 0 22 26"
                >
                  <title>file-alt</title>
                  <path d="M11.2 6.8v-6.8h-10c-0.67 0-1.2 0.54-1.2 1.2v23.2c0 0.67 0.54 1.2 1.2 1.2h16.8c0.67 0 1.2-0.54 1.2-1.2v-16.4h-6.8c-0.66 0-1.2-0.54-1.2-1.2z m3.2 11.8c0 0.33-0.27 0.6-0.6 0.6h-8.4c-0.33 0-0.6-0.27-0.6-0.6v-0.4c0-0.33 0.27-0.6 0.6-0.6h8.4c0.33 0 0.6 0.27 0.6 0.6v0.4z m0-3.2c0 0.33-0.27 0.6-0.6 0.6h-8.4c-0.33 0-0.6-0.27-0.6-0.6v-0.4c0-0.33 0.27-0.6 0.6-0.6h8.4c0.33 0 0.6 0.27 0.6 0.6v0.4z m0-3.6v0.4c0 0.33-0.27 0.6-0.6 0.6h-8.4c-0.33 0-0.6-0.27-0.6-0.6v-0.4c0-0.33 0.27-0.6 0.6-0.6h8.4c0.33 0 0.6 0.27 0.6 0.6z m4.8-5.71v0.31h-6.4v-6.4h0.31c0.32 0 0.63 0.13 0.85 0.35l4.89 4.9c0.23 0.23 0.35 0.53 0.35 0.84z"></path>
                </svg>
              </g>
            </svg>
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
