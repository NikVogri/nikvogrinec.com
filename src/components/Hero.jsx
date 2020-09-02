import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/sass/hero.scss"

const Hero = () => {
  const {
    allFile: { publicURL: heroImage },
  } = useStaticQuery(graphql`
    query {
      allFile: file(name: { eq: "hero-image" }) {
        publicURL
      }
    }
  `)

  return (
    <section className="hero relative" id="hero">
      <div className="md:flex items-center mt-8 lg:mt-0">
        <div className="md:w-1/2 w-full relative">
          <h1>
            <span className="block">Welcome, welcome, welcome!</span>I design &
            build full-stack web application & I love learning new technologies.
          </h1>
        </div>

        <div className="md:w-1/2 w-full">
          <img src={heroImage} alt="hero" className="md:float-right" />
        </div>
      </div>
      <div className="hero-long mt-8  md:mt-16 relative">
        <p>
          Hello, and welcome to my website. I spend my time designing and
          developing <span>real-world web applications</span> that make people's
          lives easier in any way I can. I started this journey a couple of
          years ago but got fully invested into it more{" "}
          <span>than a year ago</span>. I work with with many technologies both
          in <span>front-end</span> and <span>back-end</span>.
        </p>
      </div>
    </section>
  )
}

export default Hero
