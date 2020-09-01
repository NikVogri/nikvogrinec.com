import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState, useEffect, useContext } from "react"
import { myContext } from "../Context/ThemeContext"

import SideNavMobile from "./SideNavMobile"
import ToggleDarkSvg from "../images/toggle-dark.svg"
import ToggleLightSvg from "../images/toggle-light.svg"

import "../styles/sass/navigation.scss"

const Navigation = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)

  const theme = useContext(myContext)

  const mobileNavToggle = () => {
    !openMobileNav
      ? (document.body.style = "overflow: hidden;")
      : (document.body.style = "overflow-x: hidden;")

    setOpenMobileNav(!openMobileNav)
  }

  useEffect(() => {
    // Remove scroll lock when another page gets loaded
    document.body.style = "overflow-x: hidden;"
  }, [])

  const toggleDarkMode = () => {
    if (!theme.isDark) {
      localStorage.setItem("dark-mode", true)
    } else {
      localStorage.removeItem("dark-mode")
    }

    theme.setDarkMode()
    document.body.classList.toggle("dark-mode")
    document.body.classList.toggle("light-mode")
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

            <button
              tabIndex="0"
              onClick={toggleDarkMode}
              onKeyPress={toggleDarkMode}
              className={`ml-6 sm:ml-8 outline-none bg-transparent border-none inline-block p-0`}
            >
              <img
                src={!theme.isDark ? ToggleDarkSvg : ToggleLightSvg}
                alt="toggles dark mode"
                title={theme.isDark ? "Toggle Light Mode" : "Toggle Dark Mode"}
                className={` cursor-pointer toggler ${
                  theme.isDark ? "dark-toggled" : "light-toggled"
                }`}
              />
            </button>
          </div>
          <div className="block sm:hidden flex align-center">
            <button
              tabIndex="0"
              onClick={toggleDarkMode}
              onKeyPress={toggleDarkMode}
              className={`ml-6 sm:ml-8 outline-none bg-transparent border-none inline-block p-0`}
            >
              <img
                src={!theme.isDark ? ToggleDarkSvg : ToggleLightSvg}
                alt="toggles dark mode"
                title={theme.isDark ? "Toggle Light Mode" : "Toggle Dark Mode"}
                className={`cursor-pointer mr-10 toggler outline-none  ${
                  theme.isDark ? "dark-toggled" : "light-toggled"
                }`}
              />
            </button>
            <div
              className={`burger-menu outline-none ${
                openMobileNav ? "open" : ""
              }`}
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
    </>
  )
}

export default Navigation
