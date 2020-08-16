import PropTypes from "prop-types"
import React, { useEffect } from "react"
import "../styles/style.css"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Particles from "react-particles-js"

import useLocalStorage from "../hooks/useLocalStorage"
import particleConfig from "../config/particles"

const Layout = ({ children }) => {
  const { getFromlocalStorage, data: darkMode } = useLocalStorage()

  useEffect(() => {
    getFromlocalStorage("dark-mode")

    if (darkMode) {
      particleConfig.particles.color = "#fff"
      particleConfig.particles.line_linked.color = "#fff"
    }
  }, [])

  return (
    <>
      <Particles
        className="particles hidden md:block"
        params={particleConfig}
      />
      <Navigation />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
