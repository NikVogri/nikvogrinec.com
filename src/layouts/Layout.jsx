import PropTypes from "prop-types"
import React, { useEffect, useContext } from "react"
import "../styles/style.css"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Particles from "react-particles-js"

import { myContext } from "../Context/ThemeContext"

import particleConfigLight from "../config/particlesLight"
import particleConfigDark from "../config/particlesDark"

const Layout = ({ children }) => {
  const theme = useContext(myContext)
  useEffect(() => {
    const lightModeEnabled = localStorage.getItem("light-mode")
    if (lightModeEnabled) {
      theme.setDarkMode(false)
      document.body.classList.add("light-mode")
      document.body.classList.remove("dark-mode")
    } else {
      document.body.classList.add("dark-mode")
    }
  }, [theme])

  return (
    <myContext.Consumer>
      {context => (
        <>
          <Particles
            className="particles hidden md:block"
            params={context.isDark ? particleConfigDark : particleConfigLight}
          />
          <Navigation />
          <main className="container">{children}</main>
          <Footer />
        </>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
