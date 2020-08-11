import PropTypes from "prop-types"
import React from "react"
import "../styles/style.css"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Layout = ({ children }) => {
  return (
    <>
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
