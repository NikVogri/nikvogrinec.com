// import { graphql } from "gatsby"
import Layout from "../layouts/Layout.jsx"
import React from "react"
import "../styles/sass/index.scss"
import BackgroundShapeCube from "../../public/images/shapes/shape-bg-cube.svg"
import BackgroundShapeDotsSquare from "../../public/images/shapes/background-shape-dots-square.svg"
import Dodecahedron from "../../public/images/shapes/dodecahedron.svg"
import HeroImage from "../../public/images/hero-image.svg"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <section className="hero py-16">
        <div className="md:flex items-center mt-16">
          <div className="md:w-1/2 w-full">
            <h1>
              <span class="block">Welcome, welcome, welcome!</span>I design &
              build full-stack web application & I love learning new
              technologies.
            </h1>
          </div>

          <div className="md:w-1/2 w-full">
            <img src={HeroImage} alt="hero image" className="md:float-right" />
          </div>
        </div>
        <div class="hero-long mt-16">
          <p>
            Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing
            elit. Phasellus non metus eleifend, vehicula magna nec, malesuada
            mauris. Nunc quam turpis, suscipit quis eros at, egestas aliquet
            nisi. Duis scelerisque purus malesuada ante posuere, vel finibus
            massa vestibulum. Vivamus luctus felis eros, eu pellentesque risus
            commodo quis. Duis feugiat <span>eros diam</span>, mollis semper
            nunc malesuada quis. Donec quis feugiat urna. Donec blandit gravida
            libero a bibendum. Integer dui dolor, semper{" "}
            <span>acvestibulum</span>.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql`
//   query HomeQuery {
//     portfolio: allContentfulPortfolio {
//       nodes {
//         ...PortfolioCard
//       }
//     }
//   }
// `
