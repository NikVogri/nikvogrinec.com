import PropTypes from "prop-types"
import React, { useEffect, useContext } from "react"
import "../styles/style.css"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

import { myContext } from "../Context/ThemeContext"

const Layout = ({ children }) => {
  const theme = useContext(myContext)
  useEffect(() => {
    const lightModeEnabled = localStorage.getItem("light-mode")
    if (lightModeEnabled) {
      theme.setDarkMode(false)
      document.documentElement.classList.add("light-mode")
      document.documentElement.classList.remove("dark-mode")
    } else {
      document.documentElement.classList.add("dark-mode")
    }
  }, [theme])

  return (
    <>
      <Navigation />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
