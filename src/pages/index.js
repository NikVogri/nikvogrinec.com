import React from "react"

import Layout from "../layouts/Layout.jsx"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import BlogCards from "../components/BlogCards"

import SiteMetadata from "../components/SiteMetadata.jsx"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <Layout>
      <SiteMetadata
        title="Nik Vogrinec Portfolio"
        description="Portfolio for full stack web developer Nik Vogrinec located in Slovenia."
      />
      <Hero />
      <Projects />
      <hr />
      <About />
      <hr />
      <BlogCards />
    </Layout>
  )
}

export default IndexPage
