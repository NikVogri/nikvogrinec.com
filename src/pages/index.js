// import { graphql } from "gatsby"
import React from "react"

import Layout from "../layouts/Layout.jsx"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import BlogCards from "../components/BlogCards"

import SiteMetadata from "../components/SiteMetadata.jsx"

import "../styles/sass/index.scss"
// import BackgroundShapeCube from "../../public/images/shapes/shape-bg-cube.svg"
// import BackgroundShapeDotsSquare from "../../public/images/shapes/background-shape-dots-square.svg"
// import Dodecahedron from "../../public/images/shapes/dodecahedron.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SiteMetadata
        title="Nik Vogrinec Portfolio"
        description="Portfolio for full stack web developer Nik Vogrinec located in Slovenia."
      />
      <Hero />
      <Projects />
      <About />
      <BlogCards />
    </Layout>
  )
}

export default IndexPage
