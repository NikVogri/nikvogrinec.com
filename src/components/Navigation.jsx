import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import SideNavMobile from "./SideNavMobile"

import ToggleDarkSvg from "../images/toggle-dark.svg"
import ToggleLightSvg from "../images/toggle-light.svg"

import "../styles/sass/navigation.scss"

const Navigation = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const mobileNavToggle = () => {
    !openMobileNav
      ? (document.body.style = "overflow: hidden;")
      : (document.body.style = "overflow-x: hidden;")

    setOpenMobileNav(!openMobileNav)
  }

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("dark-mode")
    if (darkModeEnabled) {
      setDarkMode(true)
      document.body.classList.add("dark-mode")
      document.body.classList.remove("light-mode")
    } else {
      document.body.classList.add("light-mode")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    if (!darkMode) {
      localStorage.setItem("dark-mode", true)
    } else {
      localStorage.removeItem("dark-mode")
    }

    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode")
    console.log("here")
  }

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <>
      <nav className="navigation m-0 py-4 sm:py-8 fixed sm:relative z-10">
        <div className="flex justify-between items-center px-6 sm:px-0">
          <Link to="/">
            <p className="p-0 m-0 name">
              Nik<span>Vogrinec</span>
            </p>
          </Link>
          <div className="hidden sm:block links">
            {site.data.menu.map((link, key) => (
              <Link
                key={`menu_desktop_link${key}`}
                className="ml-6 sm:ml-8"
                to={link.to}
              >
                {link.name}
              </Link>
            ))}

            <img
              src={!darkMode ? ToggleDarkSvg : ToggleLightSvg}
              alt="toggles dark mode"
              title={darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
              className={`ml-6 sm:ml-8 cursor-pointer toggler ${
                darkMode ? "dark-toggled" : "light-toggled"
              }`}
              onClick={toggleDarkMode}
            />
          </div>
          <div className="block sm:hidden flex align-center">
            <img
              src={!darkMode ? ToggleDarkSvg : ToggleLightSvg}
              alt="toggles dark mode"
              title={darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
              className={`ml-6 sm:ml-8 cursor-pointer mr-10 toggler ${
                darkMode ? "dark-toggled" : "light-toggled"
              }`}
              onClick={toggleDarkMode}
            />
            <div
              className={`burger-menu ${openMobileNav ? "open" : ""}`}
              onClick={mobileNavToggle}
              onKeyDown={mobileNavToggle}
              role="menu"
              tabIndex="0"
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <SideNavMobile
          links={site.data.menu}
          isOpen={openMobileNav}
          close={() => mobileNavToggle()}
        />
      </nav>
      <hr />
    </>
  )
}

export default Navigation
