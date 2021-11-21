import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { myContext } from "../Context/ThemeContext"

import Particles from "react-particles-js"

import particleConfigLight from "../config/particlesLight"
import particleConfigDark from "../config/particlesDark"

import "../styles/sass/hero.scss"

const Hero = () => {
  const { isDark } = useContext(myContext)

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
      <Particles
        className="particles hidden md:block"
        params={isDark ? particleConfigDark : particleConfigLight}
      />
      <div className="text-center mt-8 lg:mt-0 lg:w-8/12 mx-auto">
        <h1 className="text-center" data-bg={isDark ? "dark" : "light"}>
          <span>Hi, I'm Nik!</span>
          <span>I design & build full-stack web applications</span>
        </h1>
      </div>
      {/* <div className="hero-long mt-8  md:mt-16 relative">
        <p>
          welcome to my website. I spend my time designing and developing{" "}
          <span>real-world web applications</span> that make people's lives
          easier in any way I can. I started this journey a couple of years ago
          but got fully invested into it more <span>than a year ago</span>. I
          work with with many technologies both in <span>front-end</span> and{" "}
          <span>back-end</span>.
        </p>
      </div> */}
    </section>
  )
}

export default Hero
