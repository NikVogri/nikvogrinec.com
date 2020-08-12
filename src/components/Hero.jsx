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
    <section className="hero py-16 md:py-0 relative" id="hero">
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
    </section>
  )
}

export default Hero
